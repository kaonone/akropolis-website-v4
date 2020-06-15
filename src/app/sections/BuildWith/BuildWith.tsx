import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { Grid, Link } from 'shared/view/elements';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { TheGraph, OpenZeppelin, Compound, Fulcrum, Aave, Dydx, MakerDao, Staked } from './logos';
import { makeStyles } from 'shared/styles';

const tKeys = tKeysAll.new.buildWith;

type Chank = 'title' | 'build-with' | 'integrations';

interface IProps {
  className?: string;
  includes?: Chank[];
}

export function BuildWith(props: IProps) {
  const { includes = [], className } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  const withLink = React.useCallback(
    (href: string, children: React.ReactNode) => (
      <Link href={href} color="textPrimary" target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ),
    [],
  );

  return (
    <Section className={className} title={includes.includes('title') ? t(tKeys.title.getKey()) : undefined}>
      <Grid container spacing={2} justify="space-between">
        {includes.includes('build-with') && (
          <Grid item xs={12} md={4}>
            <Card label={t(tKeys.labels.buildWith.getKey())}>
              <div className={classes.content}>
                <Grid container spacing={2} alignItems="center" justify="space-around">
                  <Grid item>{withLink('https://staked.us', <Staked className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://thegraph.com', <TheGraph className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://openzeppelin.com', <OpenZeppelin className={classes.logo} />)}</Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        )}
        {includes.includes('integrations') && (
          <Grid item xs={12} md={6}>
            <Card label={t(tKeys.labels.integrations.getKey())}>
              <div className={classes.content}>
                <Grid container spacing={2} alignItems="center" justify="space-around">
                  <Grid item>{withLink('https://compound.finance', <Compound className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://fulcrum.trade', <Fulcrum className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://aave.com', <Aave className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://dydx.exchange', <Dydx className={classes.logo} />)}</Grid>
                  <Grid item>{withLink('https://makerdao.com', <MakerDao className={classes.logo} />)}</Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        )}
      </Grid>
    </Section>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: theme.spacing(9.5),

    padding: theme.spacing(3, 2.5),
    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(3.75, 6),
    },
    [theme.breakpoints.up('tabletSM')]: {
      padding: theme.spacing(3, 2),
    },
    [theme.breakpoints.up('desktopXS')]: {
      padding: theme.spacing(3, 3.5),
    },
  },

  logo: {
    display: 'block',
    fontSize: theme.spacing(2.5),
    [theme.breakpoints.up('desktopXS')]: {
      fontSize: theme.spacing(3),
    },
    [theme.breakpoints.up('desktopSM')]: {
      fontSize: theme.spacing(3.25),
    },
  },
}));
