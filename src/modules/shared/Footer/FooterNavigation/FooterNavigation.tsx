import * as React from 'react';

import routes from 'modules/routes';
import privacyPolicyURL from 'assets/Akropolis_Privacy_Policy.pdf';
import termsURL from 'assets/Akropolis_Terms_and_Conditions.pdf';
import { IMenuItem } from 'shared/types/common';

import { StylesProps, provideStyles } from './FooterNavigation.style';
import { NavMenuItem } from 'shared/view/components';

const menuItems: IMenuItem[] = [
  {
    path: '#', // TODO ds: add url
    title: 'Cashflow Relay',
    isExternal: true,
  },
  {
    path: '#', // TODO ds: add url
    title: 'Chama Network',
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io',
    title: 'Wiki',
    isExternal: true,
  },
  {
    path: routes.company.getRoutePath(),
    title: 'Company',
  },
  {
    path: privacyPolicyURL,
    title: 'Privacy Policy',
    isExternal: true,
  },
  {
    path: termsURL,
    title: 'Terms & Conditions',
    isExternal: true,
  },
];

function FooterNavigation(props: StylesProps) {
  const { classes } = props;
  const halfLength = Math.ceil(menuItems.length / 2);
  return (
    <div className={classes.root}>
      <div className={classes.column}>
        {menuItems.slice(0, halfLength).map(item => (
          <NavMenuItem key={item.title} className={classes.link} {...item} />
        ))}
      </div>
      <div className={classes.column}>
        {menuItems.slice(halfLength).map(item => (
          <NavMenuItem key={item.title} className={classes.link} {...item} />
        ))}
      </div>
    </div>
  );
}

export default provideStyles(FooterNavigation);
