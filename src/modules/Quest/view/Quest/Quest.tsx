import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import { Quest } from 'modules/sections';

import { StylesProps, provideStyles } from './Quest.style';

function Home(_props: RouteComponentProps & StylesProps) {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Quest />
      </Layout.Intro>
    </Layout>
  );
}

export default provideStyles(Home);
