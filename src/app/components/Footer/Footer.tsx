import React from 'react';
import cn from 'classnames';

import { StylesProps, provideStyles } from './Footer.style';
import FooterNavigation from './FooterNavigation/FooterNavigation';

interface IProps {
  className?: string;
}

function Footer(props: IProps & StylesProps) {
  const { classes } = props;

  const startYear = 2017;
  const yearNow = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <small className={classes.address}>
        {[
          'Akropolis Decentralised Ltd.',
          'Suite 23 Portland House, Glacis Road, Gibraltar, GX11 1AA',
          'COMPANY NUMBER: 116430',
          `${startYear}${yearNow > startYear ? '-' + yearNow : ''}, All right reserved`,
        ].join(' | ')}
      </small>
      <div className={cn(classes.column, classes.right)}>
        <FooterNavigation />
      </div>
    </footer>
  );
}

export default provideStyles(Footer);
