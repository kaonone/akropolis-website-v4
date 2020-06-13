import * as React from 'react';

import profMemberships from 'data/profMemberships';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import ProfMembership from './ProfMembership/ProfMembership';

function ProfMemberships() {
  const { t, tKeys, locale } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={8}>
      <Section title={t(tKeys.sections.profMemberships.title.getKey())}>
        <Grid container spacing={4}>
          {profMemberships.map(({ description, ...item }) => (
            <Grid item xs={12} key={item.membershipName}>
              <ProfMembership {...item} description={description[locale]} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </PageBlock>
  );
}

export default ProfMemberships;
