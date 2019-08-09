import * as React from 'react';

import { Grid } from 'shared/view/elements';
import Layout from 'modules/shared/Layout/Layout';

import { StylesProps, provideStyles } from './Layout.style';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

interface IOwnProps {
  children: React.ReactNode;
}

type IProps = IOwnProps & StylesProps;

export default provideStyles(function Preview(props: IProps) {
  const { classes, children } = props;

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Grid container direction="column" alignItems="stretch" className={classes.root}>
          <div className={classes.content}>
            <p className={classes.title}>{'Token Swap'}</p>
            <div className={classes.children}>{children}</div>
          </div>
        </Grid>
      </Layout.Intro>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
});
