import React from 'react';

import { useStyles } from './Footer.style';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';

export function Footer() {
  const classes = useStyles();

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
      <FooterNavigation className={classes.nav} />
    </footer>
  );
}
