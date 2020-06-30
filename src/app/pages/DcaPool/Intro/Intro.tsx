import React from 'react';

import { Intro } from 'app/components/Intro/Intro';
import { Button, Link, LinkProps, Grid } from 'shared/view/elements';

import { DcaPoolIcon } from '../Icons';
import { useStyles } from './Intro.styles';

function DcaPoolIntro() {
  const classes = useStyles();

  return (
    <Intro
      icon={<DcaPoolIcon fontSize="inherit" />}
      title="Automate your DeFi life: Combine and compound DeFi yields and DCA your way into ETH & BTC"
    >
      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              size="large"
              color="gradient"
              component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Prototype
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="large"
              color="secondary"
              component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Waitlist
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="large"
              color="secondary"
              component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feature Request
            </Button>
          </Grid>
        </Grid>
      </div>
    </Intro>
  );
}

export { DcaPoolIntro };
