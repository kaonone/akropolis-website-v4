import * as React from 'react';

import { AlertIcon } from 'app/components/icons';
import { makeStyles, useBreakpointsMatch } from 'utils/styles';
import { Grid, Link } from 'app/components';
import { Metamask, Brave, Status } from 'app/components/icons/wallets';

const web3Links = [
  {
    title: 'Metamask extension',
    shortTitle: 'Metamask',
    address: 'https://metamask.app.link/',
    Icon: Metamask,
  },
  {
    title: 'Brave',
    address: 'https://brave.app.link/',
    Icon: Brave,
  },
  {
    title: 'Status app',
    address: 'https://status.im/',
    Icon: Status,
  },
];

export function Web3Message() {
  const classes = useStyles();

  const isMobile = useBreakpointsMatch({ to: 'mobileMD' });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} container wrap="nowrap" spacing={1}>
        <Grid item>
          <AlertIcon className={classes.alertIcon} />
        </Grid>
        <Grid item>
          <span className={classes.text}>
            Please install the Web3 extension or use Web3 browser to connect to your wallet.
          </span>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={(isMobile && 2) || 3}
        justify={isMobile ? 'center' : 'flex-start'}
      >
        {web3Links.map(({ title, shortTitle, address, Icon }) => (
          <Grid
            item
            container
            alignItems="center"
            wrap="nowrap"
            xs
            className={classes.link}
            key={title}
          >
            <Icon className={classes.icon} />
            <Link
              href={address}
              target="_blank"
              rel="noopener noreferrer"
              title={(isMobile && shortTitle) || title}
              underline={isMobile ? 'none' : 'hover'}
              color="textPrimary"
            >
              <span className={classes.linkText}>{(isMobile && shortTitle) || title}</span>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(
  theme => ({
    alertIcon: {
      marginTop: 5,
      fontSize: 16,
    },

    text: {
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.38,

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 12,
        lineHeight: 'normal',
      },
    },

    link: {
      flexGrow: 0,
    },

    linkText: {
      fontSize: 13,
      fontWeight: 'normal',
      whiteSpace: 'nowrap',

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 12,
        fontWeight: 300,
      },
    },

    icon: {
      fontSize: 20,
      marginRight: 5,
    },
  }),
  { name: 'Web3Message' },
);
