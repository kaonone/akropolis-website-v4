import React from 'react';
import { Section } from 'app/components/Section/Section';
import { Typography } from 'shared/view/elements';
import { useRepos, calculateStats } from './github';
import { makeStyles, getGrid } from 'shared/styles';

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
              <Typography key={language} variant="body2" color="textSecondary">
                <span className={classes.point} />
                {language}
              </Typography>
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
  point: {
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.palette.text.secondary,
    marginRight: 6,

    '$item:nth-child(1) &': {
      backgroundColor: theme.colors.heliotrope3,
    },
    '$item:nth-child(2) &': {
      backgroundColor: theme.colors.pictonBlue,
    },
    '$item:nth-child(3) &': {
      backgroundColor: theme.colors.royalBlue2,
    },
    '$item:nth-child(4) &': {
      backgroundColor: theme.colors.turquoise,
    },
  },

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
