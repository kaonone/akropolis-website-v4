import * as React from 'react';

import openSourceProducts from 'data/openSourceProducts';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import OpenSourceDevelopmentCard from './OpenSourceDevelopmentCard';

function OpenSourceDevelopment() {
  const { t, tKeys } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={2} lgVPadding={10}>
      <Section title={t(tKeys.sections.openSourceDevelopment.title.getKey())}>
        <Grid container spacing={16} justify="center">
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
