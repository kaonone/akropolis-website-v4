import React from 'react';
import { makeStyles } from 'shared/styles';
import { Typography, Button, Link, LinkProps } from 'shared/view/elements';
import { Adaptive } from 'services/adaptability';
import { useTranslate, tKeys } from 'services/i18n';
import { ThemeButton } from 'services/theme';

export function Intro() {
  const classes = useStyles();
  const { t } = useTranslate();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {t(tKeys.new.intro.title.getKey())}
      </Typography>
      <Typography className={classes.description}>{t(tKeys.new.intro.subtitle.getKey())}</Typography>
      <div className={classes.actions}>
        <Button
          component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
          size="large"
          color="gradient"
          href="https://pool.akropolis.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(tKeys.new.intro.tryButton.getKey())}
        </Button>
        <Adaptive to="tabletXS">
          <ThemeButton />
        </Adaptive>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontWeight: 200,

    fontSize: theme.spacing(2.75),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(5),
      marginBottom: theme.spacing(1.75),
    },
    [theme.breakpoints.up('tabletSM')]: {
      fontSize: theme.spacing(6.25),
      marginBottom: theme.spacing(1.5),
    },
  },
  description: {
    fontSize: theme.spacing(1.5),
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2),
      marginBottom: theme.spacing(5),
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
