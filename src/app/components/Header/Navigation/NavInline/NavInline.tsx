import * as React from 'react';
import cn from 'classnames';

import { useTranslate } from 'services/i18n';
import { NavMenuItem } from 'shared/view/components';
import { menuItems } from '../constants';
import { useStyles } from './NavInline.style';

interface Props {
  className?: string;
  extraLeft?: React.ReactElement[];
  extraRight?: React.ReactElement[];
}

export function NavInline({ extraLeft = [], extraRight = [], className }: Props) {
  const classes = useStyles();
  const { t } = useTranslate();

  return (
    <nav className={cn(className, classes.root)}>
      {extraLeft.map((item, index) => (
        <div className={classes.item} key={index}>
          {item}
        </div>
      ))}
      {menuItems.map(({ title, ...item }) => (
        <div className={classes.item} key={title}>
          <NavMenuItem className={classes.navLink} underline="none" title={t(title)} color="textPrimary" {...item} />
        </div>
      ))}
      {extraRight.map((item, index) => (
        <div className={classes.item} key={index}>
          {item}
        </div>
      ))}
    </nav>
  );
}
