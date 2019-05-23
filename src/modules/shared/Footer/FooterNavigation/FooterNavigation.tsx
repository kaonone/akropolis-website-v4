import * as React from 'react';

import privacyPolicyURL from 'assets/Akropolis_Privacy_Policy.pdf';
import termsURL from 'assets/Akropolis_Terms_and_Conditions.pdf';
import routes from 'modules/routes';
import { tKeys, useTranslate } from 'services/i18n';

import { IMenuItem } from 'shared/types/common';
import { NavMenuItem } from 'shared/view/components';

import { StylesProps, provideStyles } from './FooterNavigation.style';

const menuItems: IMenuItem[] = [
  {
    path: 'https://www.cashflowrelay.com/',
    title: tKeys.modules.navigation.cashflowRelay.getKey(),
    isExternal: true,
  },
  {
    path: '/',
    title: tKeys.modules.navigation.chamaNetwork.getKey(),
    scrollTo: 'products',
  },
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io/whitepaper/',
    title: tKeys.modules.navigation.whitepaper.getKey(),
    isExternal: true,
  },
  {
    path: routes.company.getRoutePath(),
    title: tKeys.modules.navigation.company.getKey(),
  },
  {
    path: routes.events.getRoutePath(),
    title: tKeys.modules.navigation.events.getKey(),
  },
  {
    path: routes.quest.getRoutePath(),
    title: tKeys.modules.navigation.quest.getKey(),
  },
  {
    path: privacyPolicyURL,
    title: tKeys.modules.navigation.privacyPolicy.getKey(),
    isExternal: true,
  },
  {
    path: termsURL,
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
