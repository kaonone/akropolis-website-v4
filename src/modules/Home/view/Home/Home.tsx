import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { StylesProps, provideStyles } from './Home.style';
import { Intro, News, Partners, Products, WhatYouCanBuild } from 'modules/sections';

function Home(_props: RouteComponentProps & StylesProps) {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Intro />
      </Layout.Intro>
      <Products />
      <WhatYouCanBuild />
      <Partners />
      <News />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
