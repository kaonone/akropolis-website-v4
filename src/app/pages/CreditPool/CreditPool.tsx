import * as React from 'react';

import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';
import { Benefits } from 'app/components/Benefits/Benefits';
import { makeStyles } from 'shared/styles';

import { CreditPoolIntro } from './Intro/Intro';
import { benefits } from './constants';

export function CreditPool() {
  const classes = useStyles();
  return (
    <Layout>
      <Layout.Header>
        <Header customNavItems={[]} />
      </Layout.Header>
      <Layout.Container>
        <CreditPoolIntro />
        <Benefits benefits={benefits} className={classes.section} />
      </Layout.Container>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.type === 'light' ? theme.colors.athensGray : theme.colors.shark,
    },
  },

  section: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('tabletSM')]: {
      marginTop: theme.spacing(7.5),
    },

    '&:last-child': {
      marginBottom: theme.spacing(3.75),
      [theme.breakpoints.up('tabletSM')]: {
        marginBottom: theme.spacing(7.5),
      },
    },
  },
}));
