import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { Bnbridge as BnbridgeSection } from 'modules/sections';
import { StylesProps, provideStyles } from './Bnbridge.style';

function Bnbridge(_props: RouteComponentProps & StylesProps) {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <BnbridgeSection />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Bnbridge);
