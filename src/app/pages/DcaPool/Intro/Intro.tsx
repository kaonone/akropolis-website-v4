import React from 'react';

import { Intro } from 'app/components/Intro/Intro';
import { DcaPoolIcon } from './DcaPoolIcon';
import { makeStyles } from 'shared/styles';
import { Button, Link, LinkProps, Grid, Box } from 'shared/view/elements';

export function DcaPoolIntro() {
  const classes = useStyles();
  return (
    <Intro
      icon={<DcaPoolIcon fontSize="inherit" />}
      title="Automate your DeFi life: Combine and compound DeFi yields and DCA your way into BTC"
      description="Automate your DeFi savings"
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
          <Grid container item xs wrap="nowrap">
            <Box clone flexShrink={0}>
              <Button
                size="large"
                color="gradient"
                component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
                underline="none"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Express Interest
              </Button>
            </Box>
            <div className={classes.disclaimer}>
              <span>Coming soon!</span>
              <br />
              <span>But now you can take a look at the prototype</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </Intro>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2.5),
    },
  },

  disclaimer: {
    minWidth: 240,
    fontWeight: 300,
    fontSize: 12,

    marginLeft: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 15,
      marginLeft: theme.spacing(2.5),
    },
  },
}));
