import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './Footer.style';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import { useTranslate } from 'services/i18n';

interface IProps {
  className?: string;
}

function Footer(props: IProps & StylesProps) {
  const { classes } = props;
  const { t, tKeys } = useTranslate();
  return (
    <footer className={classes.root}>
      <div className={classes.content}>
        <div className={cn(classes.column, classes.left)}>
          <Link to="/" className={classes.logo}>
            <LogoWithNameIcon fontSize="inherit" />
          </Link>
          <p className={classes.description}>
            {t(tKeys.sections.intro.title.getKey())}
          </p>
        </div>
        <div className={cn(classes.column, classes.right)}>
          <FooterNavigation />
        </div>
      </div>
      <small className={classes.address}>
        {[
          'Akropolis Decentralised Ltd.',
          'Suite 23 Portland House, Glacis Road, Gibraltar, GX11 1AA',
          'COMPANY NUMBER: 116430',
        ].join(' | ')}
      </small>
    </footer>
  );
}

export default provideStyles(Footer);
