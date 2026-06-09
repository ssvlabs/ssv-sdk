import {
  type BeaconValidator,
  getBeaconAPI,
  getBeaconValidatorLifecycleStage,
  getBeaconValidator,
  getBeaconValidatorState,
  getBeaconValidators,
  getBeaconValidatorStates,
  waitForBeaconValidatorActivation,
} from '@/api/beacon';
import { afterEach, describe, expect, it, vi } from 'vitest';

const FAR_FUTURE_EPOCH = '18446744073709551615';

const createRawValidator = (
  overrides?: {
    index?: BeaconValidator['index'] | null;
    balance?: BeaconValidator['balance'];
    status?: BeaconValidator['status'];
    validator?: Partial<BeaconValidator['validator']>;
  },
): BeaconValidator => ({
  index: typeof overrides?.index === 'undefined' ? '12' : (overrides.index as never),
  balance: overrides?.balance ?? '32000000000',
  status: overrides?.status ?? 'active_ongoing',
  validator: {
    pubkey: overrides?.validator?.pubkey ?? '0xabc',
    withdrawal_credentials:
      overrides?.validator?.withdrawal_credentials ?? '0xdef',
    effective_balance:
      overrides?.validator?.effective_balance ?? '32000000000',
    slashed: overrides?.validator?.slashed ?? false,
    activation_eligibility_epoch:
      typeof overrides?.validator?.activation_eligibility_epoch === 'undefined'
        ? '1'
        : (overrides.validator.activation_eligibility_epoch as never),
    activation_epoch:
      typeof overrides?.validator?.activation_epoch === 'undefined'
        ? '2'
        : (overrides.validator.activation_epoch as never),
    exit_epoch:
      typeof overrides?.validator?.exit_epoch === 'undefined'
        ? '3'
        : (overrides.validator.exit_epoch as never),
    withdrawable_epoch:
      typeof overrides?.validator?.withdrawable_epoch === 'undefined'
        ? '4'
        : (overrides.validator.withdrawable_epoch as never),
  },
});

describe('Beacon API', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it('exports beacon helpers from the package entrypoint', async () => {
    const entrypoint = await import('@/main');

    expect(entrypoint.getBeaconValidatorState).toBeTypeOf('function');
    expect(entrypoint.getBeaconValidatorStates).toBeTypeOf('function');
    expect(entrypoint.getBeaconValidatorLifecycleStage).toBeTypeOf('function');
    expect(entrypoint.waitForBeaconValidatorActivation).toBeTypeOf('function');
  });

  it('requests a single beacon validator by id', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator(),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const validator = await getBeaconValidator('https://beacon.example/api', {
      validatorId: '0xabc/1',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://beacon.example/api/eth/v1/beacon/states/head/validators/0xabc%2F1',
    );
    expect(validator?.index).toBe('12');
  });

  it('constructs bound beacon API methods', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const api = getBeaconAPI('https://beacon.example');
    await api.getBeaconValidatorStates({ validatorIds: ['1', '2'] });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://beacon.example/eth/v1/beacon/states/head/validators?id=1&id=2',
    );
    expect(fetchMock.mock.calls[0]).toHaveLength(1);
  });

  it('uses GET for beacon validator batches when the URL stays short enough', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const validatorIds = Array.from({ length: 100 }, (_, index) => `${index}`);

    await getBeaconValidators('https://beacon.example/api', {
      validatorIds,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `https://beacon.example/api/eth/v1/beacon/states/head/validators?${validatorIds
        .map((validatorId) => `id=${validatorId}`)
        .join('&')}`,
    );
    expect(fetchMock.mock.calls[0]).toHaveLength(1);
  });

  it('uses POST for beacon validator batches when the GET URL would be too long', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const validatorIds = Array.from(
      { length: 60 },
      (_, index) => `0x${String(index).padStart(2, '0')}${'a'.repeat(120)}`,
    );

    await getBeaconValidators('https://beacon.example/api', {
      validatorIds,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://beacon.example/api/eth/v1/beacon/states/head/validators',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: validatorIds }),
      },
    );
  });

  it('returns an empty validator batch without calling fetch', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidators('https://beacon.example/api', { validatorIds: [] }),
    ).resolves.toEqual([]);

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns empty validator states without calling fetch', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorStates('https://beacon.example', { validatorIds: [] }),
    ).resolves.toEqual([]);

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('throws the same missing endpoint error for empty batch validator states as single validator state reads', async () => {
    const expectedError =
      'Beacon endpoint is not configured. Provide extendedConfig.beacon.endpoint in SDK config.';

    await expect(
      getBeaconAPI().getBeaconValidatorState({ validatorId: '1' }),
    ).rejects.toThrow(expectedError);

    await expect(
      getBeaconAPI().getBeaconValidatorStates({ validatorIds: [] }),
    ).rejects.toThrow(expectedError);
  });

  it('returns null when a beacon validator is not found', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidator('https://beacon.example', { validatorId: 'missing' }),
    ).resolves.toBeNull();

    await expect(
      getBeaconValidatorState('https://beacon.example', {
        validatorId: 'missing',
      }),
    ).resolves.toBeNull();
  });

  it('throws a clear error when beacon endpoint is missing', async () => {
    await expect(
      getBeaconAPI().getBeaconValidatorState({ validatorId: '1' }),
    ).rejects.toThrow(
      'Beacon endpoint is not configured. Provide extendedConfig.beacon.endpoint in SDK config.',
    );
  });

  it('normalizes a single beacon validator state', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator(),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).resolves.toEqual({
      publicKey: '0xabc',
      validatorIndex: 12,
      status: 'active',
      rawStatus: 'active_ongoing',
      balanceGwei: 32000000000n,
      effectiveBalanceGwei: 32000000000n,
      slashed: false,
      activationEligibilityEpoch: 1,
      activationEpoch: 2,
      exitEpoch: 3,
      withdrawableEpoch: 4,
    });
  });

  it('maps far-future exit epoch sentinel to null for a single validator state', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({
            validator: {
              exit_epoch: FAR_FUTURE_EPOCH,
            },
          }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).resolves.toMatchObject({
      activationEligibilityEpoch: 1,
      activationEpoch: 2,
      exitEpoch: null,
      withdrawableEpoch: 4,
    });
  });

  it('maps far-future withdrawable epoch sentinel to null for a single validator state', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({
            validator: {
              withdrawable_epoch: FAR_FUTURE_EPOCH,
            },
          }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).resolves.toMatchObject({
      activationEligibilityEpoch: 1,
      activationEpoch: 2,
      exitEpoch: 3,
      withdrawableEpoch: null,
    });
  });

  it.each([
    ['pending', 'pending'],
    ['active', 'active'],
    ['exited', 'exited'],
    ['withdrawal_possible', 'withdrawal_ready'],
    ['withdrawal_done', 'withdrawn'],
  ] as const)(
    'computes lifecycle stage %s from normalized beacon status %s',
    (status, lifecycleStage) => {
      expect(
        getBeaconValidatorLifecycleStage({
          status,
        }),
      ).toBe(lifecycleStage);
    },
  );

  it.each([
    ['pending_initialized', 'pending'],
    ['pending_queued', 'pending'],
    ['active_ongoing', 'active'],
    ['active_exiting', 'active'],
    ['active_slashed', 'active'],
    ['exited_unslashed', 'exited'],
    ['exited_slashed', 'exited'],
    ['withdrawal_possible', 'withdrawal_possible'],
    ['withdrawal_done', 'withdrawal_done'],
  ] as const)('maps raw beacon status %s to normalized status %s', async (rawStatus, status) => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({ status: rawStatus }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).resolves.toMatchObject({
      status,
      rawStatus,
    });
  });

  it('rejects unknown validator statuses', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({ status: 'mystery_status' as never }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).rejects.toThrow(
      'Beacon API returned an invalid response for getBeaconValidatorState: unsupported status mystery_status',
    );
  });

  it('fails clearly when validator.slashed is malformed', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({
            validator: {
              slashed: 'false' as never,
            },
          }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '12' }),
    ).rejects.toThrow(
      'Beacon API returned an invalid response for getBeaconValidatorState: validator.slashed must be a boolean',
    );
  });

  it('converts optional numeric fields to null when unavailable', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({
            index: null,
            validator: {
              activation_eligibility_epoch: null as never,
              activation_epoch: null as never,
              exit_epoch: null as never,
              withdrawable_epoch: null as never,
            },
          }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorState('https://beacon.example', { validatorId: '0xabc' }),
    ).resolves.toMatchObject({
      validatorIndex: null,
      activationEligibilityEpoch: null,
      activationEpoch: null,
      exitEpoch: null,
      withdrawableEpoch: null,
    });
  });

  it('returns normalized batch states in requested order and null for missing validators', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [
            createRawValidator({ index: '2', validator: { pubkey: '0xbbb' } }),
            createRawValidator({ index: '1', validator: { pubkey: '0xaaa' } }),
          ],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorStates('https://beacon.example', {
        validatorIds: ['0xaaa', 'missing', '2'],
      }),
    ).resolves.toEqual([
      {
        publicKey: '0xaaa',
        validatorIndex: 1,
        status: 'active',
        rawStatus: 'active_ongoing',
        balanceGwei: 32000000000n,
        effectiveBalanceGwei: 32000000000n,
        slashed: false,
        activationEligibilityEpoch: 1,
        activationEpoch: 2,
        exitEpoch: 3,
        withdrawableEpoch: 4,
      },
      null,
      {
        publicKey: '0xbbb',
        validatorIndex: 2,
        status: 'active',
        rawStatus: 'active_ongoing',
        balanceGwei: 32000000000n,
        effectiveBalanceGwei: 32000000000n,
        slashed: false,
        activationEligibilityEpoch: 1,
        activationEpoch: 2,
        exitEpoch: 3,
        withdrawableEpoch: 4,
      },
    ]);
  });

  it('preserves output ordering and nulls for large POST batch validator state lookups', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [
            createRawValidator({ index: '2', validator: { pubkey: '0xbbb' } }),
            createRawValidator({ index: '1', validator: { pubkey: '0xaaa' } }),
          ],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const validatorIds = Array.from(
      { length: 60 },
      (_, index) => `missing-${index}-${'c'.repeat(120)}`,
    );
    validatorIds[0] = '0xaaa';
    validatorIds[59] = '2';

    const expected = Array.from({ length: 60 }, () => null) as Array<
      Awaited<ReturnType<typeof getBeaconValidatorStates>>[number]
    >;

    expected[0] = {
      publicKey: '0xaaa',
      validatorIndex: 1,
      status: 'active',
      rawStatus: 'active_ongoing',
      balanceGwei: 32000000000n,
      effectiveBalanceGwei: 32000000000n,
      slashed: false,
      activationEligibilityEpoch: 1,
      activationEpoch: 2,
      exitEpoch: 3,
      withdrawableEpoch: 4,
    };
    expected[59] = {
      publicKey: '0xbbb',
      validatorIndex: 2,
      status: 'active',
      rawStatus: 'active_ongoing',
      balanceGwei: 32000000000n,
      effectiveBalanceGwei: 32000000000n,
      slashed: false,
      activationEligibilityEpoch: 1,
      activationEpoch: 2,
      exitEpoch: 3,
      withdrawableEpoch: 4,
    };

    await expect(
      getBeaconValidatorStates('https://beacon.example', {
        validatorIds,
      }),
    ).resolves.toEqual(expected);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://beacon.example/eth/v1/beacon/states/head/validators',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: validatorIds }),
      },
    );
  });

  it('maps far-future epoch sentinels to null in batch normalization', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [
            createRawValidator({
              index: '1',
              validator: {
                pubkey: '0xaaa',
                exit_epoch: FAR_FUTURE_EPOCH,
              },
            }),
            createRawValidator({
              index: '2',
              validator: {
                pubkey: '0xbbb',
                withdrawable_epoch: FAR_FUTURE_EPOCH,
              },
            }),
          ],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorStates('https://beacon.example', {
        validatorIds: ['0xaaa', '0xbbb'],
      }),
    ).resolves.toEqual([
      expect.objectContaining({
        publicKey: '0xaaa',
        exitEpoch: null,
        withdrawableEpoch: 4,
      }),
      expect.objectContaining({
        publicKey: '0xbbb',
        exitEpoch: 3,
        withdrawableEpoch: null,
      }),
    ]);
  });

  it('returns null entries for a batch not-found response', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorStates('https://beacon.example', {
        validatorIds: ['1', '2'],
      }),
    ).resolves.toEqual([null, null]);
  });

  it('throws a clear error when single validator response is missing data', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({}), { status: 200 }),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidator('https://beacon.example', { validatorId: '1' }),
    ).rejects.toThrow('Beacon API returned an invalid response for getBeaconValidator');
  });

  it('throws a clear error when batch validator response data is invalid', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: {
            invalid: true,
          },
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidators('https://beacon.example', { validatorIds: ['1'] }),
    ).rejects.toThrow(
      'Beacon API returned an invalid response for getBeaconValidators',
    );
  });

  it('throws a clear error when normalized batch validator response is malformed', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: [
            createRawValidator({
              validator: {
                effective_balance: 32000000000 as never,
              },
            }),
          ],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconValidatorStates('https://beacon.example', { validatorIds: ['1'] }),
    ).rejects.toThrow(
      'Beacon API returned an invalid response for getBeaconValidatorStates: validator.effective_balance must be a string',
    );
  });

  it('waits for a validator to become active', async () => {
    vi.useFakeTimers();

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            data: createRawValidator({ status: 'pending_queued' }),
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            data: createRawValidator({ status: 'active_ongoing' }),
          }),
          { status: 200 },
        ),
      );
    vi.stubGlobal('fetch', fetchMock);

    const activationPromise = waitForBeaconValidatorActivation(
      'https://beacon.example',
      {
        validatorId: '12',
        pollIntervalMs: 1_000,
        timeoutMs: 5_000,
      },
    );
    const activationExpectation = expect(activationPromise).resolves.toMatchObject({
      status: 'active',
      rawStatus: 'active_ongoing',
    });

    await vi.advanceTimersByTimeAsync(1_000);

    await activationExpectation;
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('keeps retrying by default when a validator is initially not found', async () => {
    vi.useFakeTimers();

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            data: createRawValidator({ status: 'active_ongoing' }),
          }),
          { status: 200 },
        ),
      );
    vi.stubGlobal('fetch', fetchMock);

    const activationPromise = waitForBeaconValidatorActivation(
      'https://beacon.example',
      {
        validatorId: 'missing',
        pollIntervalMs: 1_000,
        timeoutMs: 5_000,
      },
    );
    const activationExpectation = expect(activationPromise).resolves.toMatchObject({
      status: 'active',
      rawStatus: 'active_ongoing',
    });

    await vi.advanceTimersByTimeAsync(1_000);

    await activationExpectation;
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('throws immediately in strict mode when a validator is not found', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      waitForBeaconValidatorActivation('https://beacon.example', {
        validatorId: 'missing',
        pollIntervalMs: 1_000,
        timeoutMs: 5_000,
        failOnNotFound: true,
      }),
    ).rejects.toThrow(
      'Beacon validator missing was not found while waiting for activation',
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('waits while pending validators contain far-future epoch sentinels', async () => {
    vi.useFakeTimers();

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            data: createRawValidator({
              status: 'pending_queued',
              validator: {
                activation_epoch: FAR_FUTURE_EPOCH,
                exit_epoch: FAR_FUTURE_EPOCH,
                withdrawable_epoch: FAR_FUTURE_EPOCH,
              },
            }),
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            data: createRawValidator({ status: 'active_ongoing' }),
          }),
          { status: 200 },
        ),
      );
    vi.stubGlobal('fetch', fetchMock);

    const activationPromise = waitForBeaconValidatorActivation(
      'https://beacon.example',
      {
        validatorId: '12',
        pollIntervalMs: 1_000,
        timeoutMs: 5_000,
      },
    );
    const activationExpectation = expect(activationPromise).resolves.toMatchObject({
      status: 'active',
      rawStatus: 'active_ongoing',
    });

    await vi.advanceTimersByTimeAsync(1_000);

    await activationExpectation;
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('times out while waiting for validator activation', async () => {
    vi.useFakeTimers();

    const fetchMock = vi.fn().mockImplementation(() =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            data: createRawValidator({ status: 'pending_queued' }),
          }),
          { status: 200 },
        ),
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    const activationPromise = waitForBeaconValidatorActivation(
      'https://beacon.example',
      {
        validatorId: '12',
        pollIntervalMs: 1_000,
        timeoutMs: 2_500,
      },
    );
    const activationExpectation = expect(activationPromise).rejects.toThrow(
      'Timed out waiting for beacon validator activation for 12 after 2500ms; last observed state: pending (pending_queued)',
    );

    await vi.advanceTimersByTimeAsync(3_000);

    await activationExpectation;
  });

  it('times out in default mode after repeated not-found responses', async () => {
    vi.useFakeTimers();

    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    const activationPromise = waitForBeaconValidatorActivation(
      'https://beacon.example',
      {
        validatorId: 'missing',
        pollIntervalMs: 1_000,
        timeoutMs: 2_500,
      },
    );
    const activationExpectation = expect(activationPromise).rejects.toThrow(
      'Timed out waiting for beacon validator activation for missing after 2500ms; last observed state: not found',
    );

    await vi.advanceTimersByTimeAsync(3_000);

    await activationExpectation;
  });

  it('fails clearly when activation is no longer possible', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          data: createRawValidator({ status: 'exited_unslashed' }),
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      getBeaconAPI('https://beacon.example').waitForBeaconValidatorActivation({
        validatorId: '12',
        pollIntervalMs: 1_000,
        timeoutMs: 5_000,
      }),
    ).rejects.toThrow(
      'Beacon validator 12 reached terminal stage exited before activation',
    );
  });
});
