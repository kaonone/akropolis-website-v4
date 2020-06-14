import * as React from 'react';

import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';
import { Intro } from 'app/sections/Intro/Intro';
import { BuildWith } from 'app/sections/BuildWith/BuildWith';
import { makeStyles } from 'shared/styles';
import { Adaptive } from 'services/adaptability';
import { Features } from 'app/sections/Features/Features';
import { UseCases } from 'app/sections/UseCases/UseCases';

export function Main() {
  const classes = useStyles();
  return (
    <Layout>
      <Layout.WrapTopWave type="top">
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Container>
          <Intro />
          <Adaptive to="tabletXS">
            <BuildWith className={classes.buildWith} includes={['title', 'build-with']} />
          </Adaptive>
          <Adaptive from="tabletXS">
            <BuildWith className={classes.buildWith} includes={['title', 'build-with', 'integrations']} />
          </Adaptive>
        </Layout.Container>
      </Layout.WrapTopWave>
      <Layout.Container>
        <Adaptive to="tabletXS">
          <BuildWith className={classes.buildWithUnderWave} includes={['integrations']} />
        </Adaptive>
        <Features className={classes.features} />
        <UseCases className={classes.useCases} />
      </Layout.Container>
      <Layout.WrapTopWave type="bottom">
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout.WrapTopWave>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  buildWith: {
    marginTop: theme.spacing(5.25),
    [theme.breakpoints.up('tabletXS')]: {
      marginTop: theme.spacing(7.5),
    },
    [theme.breakpoints.up('tabletSM')]: {
      marginTop: theme.spacing(8.75),
    },
  },

  buildWithUnderWave: {
    marginTop: theme.spacing(1.5),
  },

  features: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('tabletSM')]: {
      marginTop: theme.spacing(7.5),
    },
  },

  useCases: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3.75),
    [theme.breakpoints.up('tabletSM')]: {
      marginTop: theme.spacing(7.5),
      marginBottom: theme.spacing(7.5),
    },
  },
}));
