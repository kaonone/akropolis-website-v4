import * as React from 'react';

import openSourceProducts from 'data/openSourceProducts';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import OpenSourceDevelopmentCard from './OpenSourceDevelopmentCard';

const translates = {
  title: 'Open source development',
  description:
    // tslint:disable-next-line: max-line-length
    'During the course of our development, in the absence of developer‑friendly tooling, it became apparent that some of our code and solutions can be productized. We open‑source them as our contribution to the ecosystem.',
};

function OpenSourceDevelopment() {
  return (
    <PageBlock xsVPadding={1} mdVPadding={2}>
      <Section title={translates.title} subtitle={translates.description}>
        <Grid container spacing={2} justify="center">
          {openSourceProducts.map(item => (
            <Grid key={item.url} item container xs={12} md={6}>
              <OpenSourceDevelopmentCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </PageBlock>
  );
}

export default OpenSourceDevelopment;
