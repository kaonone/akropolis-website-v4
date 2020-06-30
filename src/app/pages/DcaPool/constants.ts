import { Benefit } from 'app/components/Benefits/Benefits';
import { IMenuItem } from 'shared/types/common';
import { tKeys } from 'services/i18n';

const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
];

const benefits: Benefit[] = [
  {
    title: 'Combine DeFi Yields with Capital Gains',
    description:
      'Farm COMP, BAL, MTA and others cheaper while passively investing into BTC and ETH, all from one convenient interface',
  },
  {
    title: 'Passive savings',
    description: 'don’t wanna invest? Earn passively by pooling and lending via Staked and Curve',
  },
  {
    title: 'Welcome',
    description: 'Crypto Billionaires',
  },
];

export { menuItems, benefits };
