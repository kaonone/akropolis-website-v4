import * as React from 'react';
import cn from 'classnames';

import { PRIVACY_POLICY_URL, T_AND_C_URL } from 'assets';
import { tKeys, useTranslate } from 'services/i18n';

import { IMenuItem } from 'shared/types/common';
import { NavMenuItem } from 'shared/view/components';

import { useStyles } from './FooterNavigation.style';

const menuItems: IMenuItem[] = [
  {
    path: PRIVACY_POLICY_URL,
    title: tKeys.modules.navigation.privacyPolicy.getKey(),
    isExternal: true,
  },
  {
    path: T_AND_C_URL,
    title: tKeys.modules.navigation.termsConditions.getKey(),
    isExternal: true,
  },
];

interface Props {
  className?: string;
}

export function FooterNavigation({ className }: Props) {
  const classes = useStyles();
  const { t } = useTranslate();
  return (
    <nav className={cn(className, classes.root)}>
      {menuItems.map(({ title, ...item }) => (
        <div className={classes.item} key={title}>
          <NavMenuItem title={t(title)} color="textPrimary" {...item} />
        </div>
      ))}
    </nav>
  );
}
