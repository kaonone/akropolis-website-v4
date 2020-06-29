import React from 'react';
import { Section } from 'app/components/Section/Section';
import { makeStyles, getGrid } from 'shared/styles';
import { useRepos, calculateStats } from './github';
import { Language } from './Language';

export function Languages() {
  const classes = useStyles();
  const { data, error } = useRepos('akropolisio');
  const languages = React.useMemo(() => data && calculateStats(data).languages.slice(0, 4), [data]);
  if (error) {
    return <div>failed to load {error}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Section title={'Languages'} titleVariant="h3">
      {languages ? (
        <div className={classes.container}>
          {languages.map((language) => (
            <div key={language} className={classes.item}>
              <Language language={language} variant="body2" color="textSecondary" />
            </div>
          ))}
        </div>
      ) : (
        'Not found'
      )}
    </Section>
  );
}

const useStyles = makeStyles((theme) => ({
  ...getGrid(
    theme,
    [
      {
        breakpoint: 'mobileXS',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletXS',
        count: 4,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletSM',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
    ],
    {
      item: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  ),
}));
