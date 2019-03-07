import React from 'react';
import cn from 'classnames';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Footer.style';

interface IProps {
  className?: string;
}

function Footer(props: IProps & StylesProps) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <div className={classes.content}>
        <div className={cn(classes.column, classes.left)}>
          <LogoWithNameIcon className={classes.logo} />
          <p className={classes.description}>
            Akropolis is a lightweight, universal protocol layer capable of being deployed on a variety of blockchains.
          </p>
        </div>
        <div className={cn(classes.column, classes.right)}>Right</div>
      </div>
    </footer>
  );
}

export default provideStyles(Footer);
