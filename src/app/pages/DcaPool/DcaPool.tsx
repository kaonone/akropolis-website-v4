import * as React from 'react';

import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';
import { Benefits } from 'app/components/Benefits/Benefits';
import { DcaPoolLogo } from 'shared/view/elements';

import { DcaPoolIntro } from './Intro/Intro';
import { benefits } from './constants';
import { useStyles } from './DcaPool.styles';

function DcaPool() {
  const classes = useStyles();

  return (
    <Layout>
      <Layout.Header>
        <Header CustomLogo={DcaPoolLogo} customNavItems={[]} />
      </Layout.Header>
      <Layout.Container className={classes.main}>
        <DcaPoolIntro />
        <Benefits className={classes.benefits} benefits={benefits} />
      </Layout.Container>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export { DcaPool };
