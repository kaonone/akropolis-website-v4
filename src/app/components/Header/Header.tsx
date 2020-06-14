import React from 'react';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { Adaptive } from 'services/adaptability';
import { NavInline } from './Navigation/NavInline/NavInline';
import { useStyles } from './Header.style';
import { Button } from 'shared/view/elements';

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
          <Adaptive key="0" from="tabletXS">
            <Button color="gradient" disabled>
              Theme button
            </Button>
          </Adaptive>,
        ]}
      />
    </header>
  );
}
