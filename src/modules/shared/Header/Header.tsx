import React from 'react';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Header.style';
import { NavInline, NavDrawer } from './Navigation';

function Header(props: StylesProps) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        <LogoWithNameIcon fontSize="inherit" />
      </Link>
      <NavInline />
      <NavDrawer />
    </header>
  );
}

export default provideStyles(Header);
