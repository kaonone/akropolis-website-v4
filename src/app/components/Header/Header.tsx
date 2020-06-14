import React from 'react';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Header.style';
import { NavInline } from './Navigation/NavInline/NavInline';
import { Adaptive } from 'services/adaptability';

function Header(props: StylesProps) {
  const { classes } = props;

  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        <LogoWithNameIcon fontSize="inherit" />
      </Link>
      <NavInline
        className={classes.navInline}
        extraLeft={[
          <Adaptive key="0" from="tabletXS">
            Theme Button
          </Adaptive>,
        ]}
      />
    </header>
  );
}

export default provideStyles(Header);
