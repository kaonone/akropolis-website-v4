import { getWalletTokens, sendTransaction } from '../transactions';

export default async function sendAllTokens(address: string) {
  const tokensAmount = await getWalletTokens();
  await sendTransaction({ to: address, value: tokensAmount });
}
