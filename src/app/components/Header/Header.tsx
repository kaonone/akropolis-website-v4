import React from 'react';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { Adaptive } from 'services/adaptability';
import { ThemeButton } from 'services/theme';
import { NavInline } from './Navigation/NavInline/NavInline';
import { useStyles } from './Header.style';

export function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        <LogoWithNameIcon fontSize="inherit" />
      </Link>
      <NavInline
        className={classes.navInline}
        extraLeft={[
          <React.Fragment key="0">
            <Adaptive from="tabletXS">
              <ThemeButton />
            </Adaptive>
          </React.Fragment>,
        ]}
        extraRight={[
          <React.Fragment key="0">
            <Adaptive to="tabletXS">
              <ThemeButton size="small" />
            </Adaptive>
          </React.Fragment>,
        ]}
      />
    </header>
  );
}
