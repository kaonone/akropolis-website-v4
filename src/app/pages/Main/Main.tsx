import * as React from 'react';

import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';
import { Box } from 'shared/view/elements';

export function Main() {
  return (
    <Layout>
      <Layout.WrapTopWave type="top">
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Container>
          <Box bgcolor="rgba(255, 0, 0, 0.5)" p={2}>
            Content
          </Box>
        </Layout.Container>
      </Layout.WrapTopWave>
      <Layout.Container>
        <Box bgcolor="rgba(0, 255, 0, 0.5)" p={2}>
          Content
        </Box>
      </Layout.Container>
      <Layout.WrapTopWave type="bottom">
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout.WrapTopWave>
    </Layout>
  );
}
