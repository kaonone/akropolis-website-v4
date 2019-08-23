import * as React from 'react';

import { Grid } from 'shared/view/elements';
import { Kyc } from 'shared/view/components';
import Layout from 'modules/shared/Layout/Layout';

import { StylesProps, provideStyles } from './Kyc.style';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

type IProps = StylesProps;

export default provideStyles(function QuestKyc(props: IProps) {
  const { classes } = props;

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Grid container direction="column" alignItems="stretch" className={classes.root}>
          <div className={classes.content}>
            <p className={classes.title}>{'Quest'}</p>
            <div className={classes.children}>
              <Kyc group="quest" />
            </div>
          </div>
        </Grid>
      </Layout.Intro>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
});
