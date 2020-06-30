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
    title: 'Undercollateralised loans',
    description: 'take up to 2x from your collateral',
  },
  {
    title: 'Higher APR',
    description: 'rebalancing between DeFi protocol with RAY (soonTM)',
  },
  {
    title: 'Passive savings',
    description: 'earn rewards from pool activity and rising liquidity',
  },
];
