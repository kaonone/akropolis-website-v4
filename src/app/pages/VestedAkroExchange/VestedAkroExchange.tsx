import React from 'react';

import { makeStyles } from 'shared/styles';
import { Grid, Typography } from 'shared/view/elements';
import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';

import { Preview } from './components';

export function VestedAkroExchange() {
  const classes = useStyles();

  return (
    <Layout isDark>
      <Layout.Header>
        <Header hideThemeButton />
      </Layout.Header>
      <Layout.Container>
        <Grid container>
          <div className={classes.root}>
            <Typography className={classes.title}>{'Unlock vAKRO'}</Typography>
            <div className={classes.content}>
              <Preview />
            </div>
          </div>
        </Grid>
      </Layout.Container>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '1.875rem 1.56rem',
    backgroundColor: theme.colors.lightDark,
    marginBottom: '3.375rem',

    [theme.breakpoints.up('tabletXS')]: {
      padding: '3.75rem 3.125rem',
    },
  },

  title: {
    width: '100%',
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `auto`,
    paddingBottom: '1.875rem',
    fontSize: '1.5rem',
    fontWeight: 300,
    letterSpacing: '-0.2px',

    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '-0.5px',
    },
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `auto`,
    paddingBottom: '3.125rem',
  },
}));
