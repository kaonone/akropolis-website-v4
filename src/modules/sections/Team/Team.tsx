import * as React from 'react';

import teamMembers from 'data/team';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import TeamMember from './TeamMember/TeamMember';

function Team() {
  const { t, tKeys } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={10}>
      <Section
        title={t(tKeys.sections.team.title.getKey())}
        subtitle={t(tKeys.sections.team.subtitle.getKey())}
      >
        <Grid container spacing={24} justify="center">
          {teamMembers.map((member, index) => (
            <Grid key={index} item xs={6} md={4}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </PageBlock>
  );
}

export default Team;
