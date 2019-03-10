import * as React from 'react';
import { NavMenuItem } from 'shared/view/components';

import { menuItems } from '../constants';
import { StylesProps, provideStyles } from './NavInline.style';

function NavInline(props: StylesProps) {
  const { classes } = props;
  return (
    <nav className={classes.root}>
      {menuItems.map(item => (
        <NavMenuItem key={item.title} className={classes.link} {...item} />
      ))}
    </nav>
  );
}

export default provideStyles(NavInline);
