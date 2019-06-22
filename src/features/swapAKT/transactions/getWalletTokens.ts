import { AbiItem } from 'web3-utils';
import BN from 'bignumber.js';

import { getWeb3, getMainAccount } from 'shared/helpers/web3';
import { NETWORK_CONFIG } from 'core/contract/network';
import { web3Providers } from 'core/contract/web3';
import { ONE_ERC20 } from 'shared/constants';

const tokenAddress = NETWORK_CONFIG.daiContract;

const minABI: AbiItem[] = [
  {
    'constant': true,
    'inputs': [{ 'name': '_owner', 'type': 'address' }],
    'name': 'balanceOf',
    'outputs': [{ 'name': 'balance', 'type': 'uint256' }],
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [{ 'name': '', 'type': 'uint8' }],
    'type': 'function',
  },
];

export default async function getWalletTokens() {
  const web3 = getWeb3(web3Providers.wallet);
  const contract = new web3.eth.Contract(minABI, tokenAddress);
  const userAddress = await getMainAccount(web3);
  const _balance: BN = await contract.methods.balanceOf(userAddress).call();
  const balance = new BN(_balance); // BigNumber from balanceOf can not div at ONE_ERC20
  return balance.div(ONE_ERC20).toNumber();
}
