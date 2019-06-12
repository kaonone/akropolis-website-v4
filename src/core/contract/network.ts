import getEnvParams from '../getEnvParams';

interface INetworkConfig {
  id: number;
  type: string; // 'main' | 'kovan' | ...
  rpcUrl: string;
  daiContract: string;
  c2fcContract: string;
  aragonEnsRegistry: string;
  defaultEthNode: string;
}

const networkConfigs: Record<string, INetworkConfig> = {
  '4': {
    id: 4,
    type: 'rinkeby',
    rpcUrl: 'https://rinkeby.infura.io/',
    daiContract: '0x2d1420F4ceE004C348d58E7B28869AF8C5372323',
    c2fcContract: '0xb272fA8bD66fbD310165d322Febd5e275081f886',
    aragonEnsRegistry: '0x98df287b6c145399aaa709692c8d308357bc085d',
    defaultEthNode: 'wss://rinkeby.eth.aragon.network/ws',
  },
};

export const NETWORK_CONFIG = networkConfigs[getEnvParams().network];
