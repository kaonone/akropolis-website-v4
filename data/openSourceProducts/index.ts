import { OpenSourceName } from 'modules/sections/OpenSourceDevelopment/OpenSourceDevelopmentCard';

interface IOpenSourceProduct {
  url: string;
  name: OpenSourceName;
}

const openSourceProduct: IOpenSourceProduct[] = [
  {
    url: 'https://github.com/akropolisio/polkahub-cli',
    name: 'polkahub',
  },
  {
    url: 'https://github.com/akropolisio/akropolisOS-chain-node',
    name: 'bridge',
  },
  {
    url: 'https://github.com/akropolisio/staking-portal',
    name: 'stakingPortal',
  },
  {
    url: 'https://github.com/akropolisio/web3-wallets-kit',
    name: 'web3WalletsKit',
  },
];

export default openSourceProduct;
