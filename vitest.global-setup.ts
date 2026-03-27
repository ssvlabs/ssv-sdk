import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const artifactPath = path.resolve(
  __dirname,
  'hardhat/artifacts/contracts/test/mocks/MockCSSV.sol/MockCSSV.json',
);

export default async function globalSetup() {
  if (existsSync(artifactPath)) {
    return;
  }

  const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';

  execFileSync(pnpm, ['exec', 'hardhat', 'compile'], {
    cwd: __dirname,
    stdio: 'inherit',
  });
}
