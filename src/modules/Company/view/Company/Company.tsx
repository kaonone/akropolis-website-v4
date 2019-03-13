import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { Partners, Team, ProfMemberships } from 'modules/sections';
import { StylesProps, provideStyles } from './Company.style';

function Company(_props: RouteComponentProps & StylesProps) {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Team />
      <Partners />
      <ProfMemberships />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Company);
