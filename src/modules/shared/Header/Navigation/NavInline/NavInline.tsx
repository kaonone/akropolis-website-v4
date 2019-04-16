import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { NavMenuItem } from 'shared/view/components';
import { menuItems } from '../constants';
import { StylesProps, provideStyles } from './NavInline.style';

function NavInline(props: StylesProps) {
  const { classes } = props;
  const { t } = useTranslate();
  return (
    <nav className={classes.root}>
      {menuItems.map(({ title, ...item }) => (
        <NavMenuItem key={title} className={classes.link} title={t(title)} {...item} />
      ))}
    </nav>
  );
}

export default provideStyles(NavInline);
