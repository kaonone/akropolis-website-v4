import React from 'react';

import { Intro } from 'app/components/Intro/Intro';
import { makeStyles } from 'shared/styles';
import { Button, Link, LinkProps } from 'shared/view/elements';
import { CreditPoolIcon } from '../Icons';

export function CreditPoolIntro() {
  const classes = useStyles();
  return (
    <Intro
      icon={<CreditPoolIcon fontSize="inherit" />}
      title={
        <>
          <span>Create your own community bank.</span>
          <br />
          <span>Monetise your ideas. Build your reputation on-chain.</span>
        </>
      }
      description="Access under-collateralised credit based on trust"
    >
      <div className={classes.content}>
        Try it on
        <Button
          className={classes.button}
          fullWidth
          size="large"
          variant="contained"
          color="gradient"
          component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
          underline="none"
          href="https://sparta-rinkeby.akropolis.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rinkeby
        </Button>
        or
        <Button
          className={classes.button}
          fullWidth
          size="large"
          variant="contained"
          color="gradient"
          component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
          underline="none"
          href="https://sparta.akropolis.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mainnet
        </Button>
      </div>
    </Intro>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2.5),
    },
  },
  button: {
    margin: theme.spacing(0, 1.25),
    [theme.breakpoints.up('tabletXS')]: {
      margin: theme.spacing(0, 2),
    },
  },
}));
