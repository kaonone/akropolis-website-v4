import Web3 from 'web3';
import BigNumber from 'bignumber.js';

export type Provider = typeof Web3.givenProvider;
export type ProviderType =
  'metamask' | 'trust' | 'toshi' | 'cipher' | 'mist' | 'parity' | 'infura' | 'localhost' | 'unknown';

export interface ITransaction {
  from?: string;
  to: string;
  value: BigNumber;
  gas?: number;
  gasPrice?: string;
}
