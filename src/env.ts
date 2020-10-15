import getEnvParams, { Mode } from 'core/getEnvParams';

export type NetworkID = 1 | 4 | 42;

interface INetworkConfig {
  id: NetworkID;
  name: 'mainnet' | 'rinkeby' | 'kovan';
  etherskanDomain: string;
  contracts: {
    vestedAkro: string;
  };
}

const ethNetworkConfigRinkeby: INetworkConfig = {
  id: 4,
  name: 'rinkeby',
  etherskanDomain: 'https://rinkeby.etherscan.io/',
  contracts: {
    vestedAkro: '0x7F41426c0D4Dd87B72AaF636A18747087866FD2a',
  },
};

const ethNetworkConfigsForSandbox: INetworkConfig = {
  id: 4,
  name: 'rinkeby',
  etherskanDomain: 'https://rinkeby.etherscan.io/',
  contracts: {
    vestedAkro: '0x7F41426c0D4Dd87B72AaF636A18747087866FD2a',
  },
};

const ethNetworkConfigKovan: INetworkConfig = {
  id: 42,
  name: 'kovan',
  etherskanDomain: 'https://kovan.etherscan.io/',
  contracts: {
    vestedAkro: '0x73fC3038B4cD8FfD07482b92a52Ea806505e5748',
  },
};

const ethNetworkConfigsForMainnet: INetworkConfig = {
  id: 1,
  name: 'mainnet',
  etherskanDomain: 'https://etherscan.io/',
  contracts: {
    vestedAkro: '0x73fC3038B4cD8FfD07482b92a52Ea806505e5748',
  },
};

export const configsByMode: Record<Mode, INetworkConfig> = {
  rinkeby: ethNetworkConfigRinkeby,
  kovan: ethNetworkConfigKovan,
  sandbox: ethNetworkConfigsForSandbox,
  mainnet: ethNetworkConfigsForMainnet,
  'pre-mainnet': ethNetworkConfigsForMainnet,
};

export const ETH_NETWORK_CONFIG = configsByMode[getEnvParams().mode];
export const NETWORK_ID: NetworkID = ETH_NETWORK_CONFIG.id;
export const SIGNIFICANT_FRACTIONAL_DIGITS = 8;
export const WEB3_LONG_POOLING_TIMEOUT = 60 * 15 * 1000;
