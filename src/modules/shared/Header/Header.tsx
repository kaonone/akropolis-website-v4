import React from 'react';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Header.style';

function Header(props: StylesProps) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <LogoWithNameIcon className={classes.logo} />
      <div>Navigation</div>
    </header>
  );
}

export default provideStyles(Header);
