import { Section } from 'app/components/Section/Section';
import { Typography } from 'shared/view/elements';
import { useRepos, calculateStats } from './github';
import React from 'react';
import { Loading } from 'app/components/Loading/Loading';

export function LastCommit() {
  const response = useRepos('akropolisio');
  const { data } = response;
  const stats = React.useMemo(() => data && calculateStats(data), [data]);

  return (
    <Loading response={response}>
      <Section title={'Last Commit'} titleVariant="h3">
        <Typography variant="body2" color="textSecondary">
          {stats ? new Date(stats.lastUpdated).toLocaleString() : 'Not found'}
        </Typography>
      </Section>
    </Loading>
  );
}
