import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';
import { Benefit } from 'app/components/Benefits/Benefits';

export const menuItems: IMenuItem[] = [
  {
    path: '#',
    title: tKeys.modules.navigation.tutorials.getKey(),
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
];

export const benefits: Benefit[] = [
  {
    title: 'Lower costs',
    description: 'gas optimization & using pooled funds to get exposure to BTC&ETH',
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
