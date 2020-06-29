import React from 'react';
import { calculateStats, useRepos } from './github';
import { makeStyles, getGrid } from 'shared/styles';
import { Typography, Link, Grid } from 'shared/view/elements';
import { Card } from 'app/components/Card';
import { Language } from './Language';

export function Repos() {
  const classes = useStyles();
  const { data, error } = useRepos('akropolisio');
  const lastRepos = React.useMemo(() => data && calculateStats(data).lastRepos, [data]);

  if (error) {
    return <div>failed to load {error}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return lastRepos ? (
    <div className={classes.container}>
      {lastRepos.map((repo) => (
        <div key={repo.name} className={classes.item}>
          <Card variant="contained" className={classes.card}>
            <Grid container direction="column" justify="space-between" className={classes.cardContent}>
              <Grid item>
                <Typography<typeof Link>
                  className={classes.title}
                  component={Link}
                  color="textPrimary"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name} →
                </Typography>
                <Typography className={classes.description} color="textPrimary">
                  {repo.description}
                </Typography>
              </Grid>
              <Grid item container spacing={1} className={classes.footer}>
                <Grid item xs>
                  {repo.language && (
                    <Language language={repo.language} className={classes.description} color="textSecondary" />
                  )}
                </Grid>
                <Grid item>
                  <Typography className={classes.description} color="textSecondary">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <div>Not found</div>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2.5, 3),
    height: '100%',
  },

  cardContent: {
    minHeight: '100%',
  },

  title: {
    display: 'block',
    fontSize: 12,
    fontWeight: 500,
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 16,
      marginBottom: theme.spacing(1.5),
    },
  },

  description: {
    fontSize: 10,
    lineHeight: 1.6,

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 12,
      lineHeight: 1.33,
    },
  },

  footer: {
    paddingTop: theme.spacing(1.25),

    [theme.breakpoints.up('tabletXS')]: {
      paddingTop: theme.spacing(2),
    },
  },

  ...getGrid(theme, [
    {
      breakpoint: 'mobileXS',
      count: 1,
      hPadding: theme.spacing(2.5),
      vPadding: theme.spacing(2.5),
    },
    {
      breakpoint: 'tabletXS',
      count: 2,
      hPadding: theme.spacing(3.75),
      vPadding: theme.spacing(3.75),
    },
    {
      breakpoint: 'tabletSM',
      count: 4,
      hPadding: theme.spacing(3.75),
      vPadding: theme.spacing(3.75),
    },
  ]),
}));
