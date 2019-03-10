import React from 'react';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Header.style';
import { NavInline, NavDrawer } from './Navigation';

function Header(props: StylesProps) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <LogoWithNameIcon className={classes.logo} />
      <NavInline />
      <NavDrawer />
    </header>
  );
}

export default provideStyles(Header);
