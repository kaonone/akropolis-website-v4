import React from 'react';
import { Link } from 'react-router-dom';

import { LanguageSelector } from 'services/i18n';
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
      <div className={classes.navInline}>
        <NavInline />
      </div>
      <LanguageSelector />
      <div className={classes.navDrawer}>
        <NavDrawer />
      </div>
    </header>
  );
}

export default provideStyles(Header);
