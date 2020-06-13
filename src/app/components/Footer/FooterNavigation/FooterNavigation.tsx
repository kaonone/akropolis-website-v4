import * as React from 'react';

import { PRIVACY_POLICY_URL, T_AND_C_URL } from 'assets';
import { tKeys, useTranslate } from 'services/i18n';

import { IMenuItem } from 'shared/types/common';
import { NavMenuItem } from 'shared/view/components';

import { StylesProps, provideStyles } from './FooterNavigation.style';

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

function FooterNavigation(props: StylesProps) {
  const { classes } = props;
  const { t } = useTranslate();
  const halfLength = Math.ceil(menuItems.length / 2);
  return (
    <div className={classes.root}>
      <div className={classes.column}>
        {menuItems.slice(0, halfLength).map(({ title, ...item }) => (
          <NavMenuItem key={title} className={classes.link} title={t(title)} {...item} />
        ))}
      </div>
      <div className={classes.column}>
        {menuItems.slice(halfLength).map(({ title, ...item }) => (
          <NavMenuItem key={title} className={classes.link} title={t(title)} {...item} />
        ))}
      </div>
    </div>
  );
}

export default provideStyles(FooterNavigation);
