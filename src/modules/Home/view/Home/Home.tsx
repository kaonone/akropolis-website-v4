import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import cn from 'classnames';

import { useTranslate } from 'services/i18n';
import { Section } from 'shared/view/components';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { StylesProps, provideStyles } from './Home.style';
import Intro from './Intro/Intro';
import Products from './Products/Products';
import WhatYouCanBuild from './WhatYouCanBuild/WhatYouCanBuild';

function Home(props: RouteComponentProps & StylesProps) {
  const { classes } = props;
  const { t, tKeys } = useTranslate();
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
      <div className={cn(classes.block, classes.youCan)}>
        <Section title={t(tKeys.modules.home.whatYouCanBuild.title.getKey())}>
          <WhatYouCanBuild />
        </Section>
      </div>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
