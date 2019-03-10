import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import cn from 'classnames';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { StylesProps, provideStyles } from './Home.style';
import Intro from './Intro/Intro';
import Products from './Products/Products';

function Home(props: RouteComponentProps & StylesProps) {
  const { classes } = props;
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Intro />
      </Layout.Intro>
      <div className={cn(classes.block, classes.products)}>
        <Products />
      </div>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
