import * as React from 'react';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { SwapAKTFormAsync } from 'features/swapAKT';

import { provideStyles, StylesProps } from './Swap.style';
import { Grid } from 'shared/view/elements';

type IProps = StylesProps;

export default provideStyles(function Swap(props: IProps) {
  const { classes } = props;
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Grid container wrap="nowrap" justify="center" className={classes.root}>
        <Grid item className={classes.swapForm}>
          <SwapAKTFormAsync />
        </Grid>
      </Grid>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
});
