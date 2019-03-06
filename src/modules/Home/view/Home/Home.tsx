import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import { StylesProps, provideStyles } from './Home.style';

function Home(props: RouteComponentProps & StylesProps) {
  const { classes } = props;
  return (
    <Layout>
      <div className={classes.root}>Home page</div>
    </Layout>
  );
}

export default provideStyles(Home);
