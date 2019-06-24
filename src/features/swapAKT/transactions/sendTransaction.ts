import { TransactionReceipt } from 'web3-core';
import { AbiItem } from 'web3-utils';

import { getWeb3 } from 'shared/helpers/web3';
import { NETWORK_CONFIG } from 'core/contract/network';
import { web3Providers } from 'core/contract/web3';
import { ONE_ERC20 } from 'shared/constants';
import { ITransaction } from 'shared/types/models';

const tokenAddress = NETWORK_CONFIG.daiContract;

const minABI: AbiItem[] = [
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_value',
        'type': 'uint256',
      },
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': '',
        'type': 'bool',
      },
    ],
    'type': 'function',
  },
];

export default async function sendTransaction(transaction: ITransaction) {
  const { to, value } = transaction;
  const web3 = getWeb3(web3Providers.wallet);
  const contract = new web3.eth.Contract(minABI, tokenAddress);
  const resultAmount = ONE_ERC20.multipliedBy(value).toFixed();

  const accounts = await web3.eth.getAccounts();

  return new Promise<string>((resolve, reject) => {
    contract.methods.transfer(to, resultAmount).send({ from: accounts[0] })
      .on('transactionHash', (transactionHash: string) => {
        console.log(transactionHash);
      })
      .on('confirmation', (_confirmationNumber: number, receipt: TransactionReceipt) => {
        resolve(receipt.transactionHash);
      })
      .on('error', (err: any) => {
        reject(err);
      });
  });
}
