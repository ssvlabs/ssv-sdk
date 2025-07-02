/* eslint-disable @typescript-eslint/no-explicit-any */
import bls from '@/libs/ssv-keys/BLS';
import { Threshold } from '@/libs/ssv-keys/Threshold';
export const sharesSignatures = async (_privateKey, operators, message, isThreshold) => {
    if (!bls.deserializeHexStrToSecretKey) {
        await bls.init(bls.BLS12_381);
    }
    const threshold = await new Threshold().create(_privateKey, operators);
    const privateKey = bls.deserializeHexStrToSecretKey(_privateKey.replace('0x', ''));
    const publicKey = privateKey.getPublicKey();
    const signatures = [];
    const ids = [];
    const randomIndex = getRandomInt(4);
    threshold.shares.forEach((share, index) => {
        if (isThreshold && index === randomIndex) {
            return;
        }
        const sharePrivateKey = share.privateKey.substr(2);
        const shareBlsPrivateKey = bls.deserializeHexStrToSecretKey(sharePrivateKey);
        signatures.push(shareBlsPrivateKey.sign(message));
        ids.push(share.id);
    });
    return {
        privateKey,
        publicKey,
        signatures,
        ids,
    };
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
