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
    <Layout isAbsoluteHeader>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Grid container direction="column" alignItems="center" className={classes.root}>
        <div className={classes.content}>
          <p className={classes.title}>{'Bounty'}</p>
          {children}
        </div>
      </Grid>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
});
