import React from 'react';
import { tKeys, useTranslate } from 'services/i18n';
import { PRIVACY_POLICY_URL, T_AND_C_URL } from 'assets';

import { Messari, Etherium } from './Icons';
import { useStyles } from './Footer.style';
import { IMenuItem } from 'shared/types/common';
import { Link, Typography } from 'shared/view/elements';

const navItems: IMenuItem[] = [
  {
    path: PRIVACY_POLICY_URL,
    title: tKeys.modules.navigation.privacyPolicy.getKey(),
  },
  {
    path: T_AND_C_URL,
    title: tKeys.modules.navigation.termsConditions.getKey(),
  },
];

interface Props {
  customNavItems?: IMenuItem[];
}

function Footer({ customNavItems }: Props) {
  const classes = useStyles();
  const { t } = useTranslate();
  const startYear = 2017;
  const yearNow = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <section className={classes.copyright}>
        <nav className={classes.nav}>
          {(customNavItems || navItems).map(({ path, title }, index) => (
            <Link
              key={index}
              className={classes.link}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              title={t(title)}
              color="textPrimary"
            >
              {t(title)}
            </Link>
          ))}
        </nav>
        <Typography className={classes.text} color="textSecondary">
          {[
            'Akropolis Decentralised Ltd.',
            'Suite 23 Portland House, Glacis Road, Gibraltar, GX11 1AA',
            'COMPANY NUMBER: 116430',
            `${startYear}${yearNow > startYear ? '-' + yearNow : ''}, All right reserved`,
          ].join(' | ')}
        </Typography>
      </section>
      <section className={classes.partners}>
        <Link
          className={classes.partnerLink}
          underline="none"
          href="https://messari.io/asset/akropolis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span hidden>Messari</span>
          <Messari className={classes.partnerIcon} />
        </Link>
        <Link
          className={classes.partnerLink}
          underline="none"
          href="https://ethereum.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span hidden>Etherium</span>
          <Etherium className={classes.partnerIcon} />
        </Link>
      </section>
    </footer>
  );
}

export { Footer };
