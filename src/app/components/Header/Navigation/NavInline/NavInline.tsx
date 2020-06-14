import * as React from 'react';
import cn from 'classnames';

import { useTranslate } from 'services/i18n';
import { NavMenuItem } from 'shared/view/components';
import { menuItems } from '../constants';
import { useStyles } from './NavInline.style';
import { Link, Button, LinkProps } from 'shared/view/elements';

interface Props {
  className?: string;
  extraLeft?: React.ReactElement[];
}

export function NavInline({ extraLeft = [], className }: Props) {
  const classes = useStyles();
  const { t, tKeys } = useTranslate();
  return (
    <nav className={cn(className, classes.root)}>
      {extraLeft.map((item, index) => (
        <div className={classes.item} key={index}>
          {item}
        </div>
      ))}
      {menuItems.map(({ title, ...item }) => (
        <div className={classes.item} key={title}>
          <NavMenuItem title={t(title)} color="textPrimary" {...item} />
        </div>
      ))}
      <div className={classes.item}>
        <Button
          component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
          color="gradient"
          href="https://pool.akropolis.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(tKeys.modules.navigation.app.getKey())}
        </Button>
      </div>
    </nav>
  );
}
