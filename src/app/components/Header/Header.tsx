import React from 'react';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { IMenuItem } from 'shared/types/common';
import { Adaptive } from 'services/adaptability';
import { ThemeButton } from 'services/theme';
import { NavInline } from 'app/components/NavInline/NavInline';
import { menuItems } from './constants';
import { useStyles } from './Header.style';

interface Props {
  customNavItems?: IMenuItem[];
  CustomLogo?: React.FC;
}

export function Header({ customNavItems, CustomLogo }: Props) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Link to="/" className={classes.logo}>
        {CustomLogo ? <CustomLogo /> : <LogoWithNameIcon />}
      </Link>
      <NavInline
        items={customNavItems || menuItems}
        className={classes.navInline}
        extraRight={[
          <React.Fragment key="0">
            <Adaptive to="tabletXS">
              <ThemeButton size="small" />
            </Adaptive>
            <Adaptive from="tabletXS">
              <ThemeButton />
            </Adaptive>
          </React.Fragment>,
        ]}
      />
    </header>
  );
}
