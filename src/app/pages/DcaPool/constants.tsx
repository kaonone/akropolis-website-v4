import React from 'react';
import { Benefit } from 'app/components/Benefits/Benefits';
import { IMenuItem } from 'shared/types/common';
import { tKeys } from 'services/i18n';
import { Link } from 'shared/view/elements';

export const DCA_LINK = 'https://www.investopedia.com/terms/d/dollarcostaveraging.asp';

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
      // tslint:disable-next-line: max-line-length
      'Farm COMP, BAL, MTA and others cheaper while passively investing into BTC and ETH, all from one convenient interface',
  },
  {
    title: 'Earn Rewards for Saving and Liquidity Provision',
    description: 'Weekly AKRO governance token rewards for all users',
  },
  {
    title: (
      <span>
        Automated Low-Cost{' '}
        <Link href={DCA_LINK} color="inherit" target="_blank" rel="noopener noreferrer">
          DCA
        </Link>{' '}
        Entry and Exit
      </span>
    ),
    description: 'Remove emotion and friction for easy passive investing',
  },
];

export { menuItems, benefits };
