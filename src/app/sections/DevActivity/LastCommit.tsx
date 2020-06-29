import { Section } from 'app/components/Section/Section';
import { Typography } from 'shared/view/elements';
import { useRepos, calculateStats } from './github';
import React from 'react';

export function LastCommit() {
  const { data, error } = useRepos('akropolisio');
  const stats = React.useMemo(() => data && calculateStats(data), [data]);
  if (error) {
    return <div>failed to load {error}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Section title={'Last Commit'} titleVariant="h3">
      <Typography variant="body2" color="textSecondary">
        {stats ? new Date(stats.lastUpdated).toLocaleString() : 'Not found'}
      </Typography>
    </Section>
  );
}
