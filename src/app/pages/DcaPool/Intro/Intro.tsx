import React from 'react';

import { Intro } from 'app/components/Intro/Intro';
import { Button, Link, LinkProps } from 'shared/view/elements';

import { DcaPoolIcon } from '../Icons';
import { useStyles } from './Intro.styles';

function DcaPoolIntro() {
  const classes = useStyles();

  return (
    <Intro
      icon={<DcaPoolIcon fontSize="inherit" />}
      title={
        <div>
          Automate your DeFi life: <br />
          Combine and compound DeFi yields and DCA your way into ETH & BTC
        </div>
      }
    >
      <div className={classes.buttons}>
        {/* <div className={classes.button}>
          <Button
            disabled
            size="large"
            color="gradient"
            variant="contained"
            component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
            underline="none"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Prototype
          </Button>
        </div> */}
        <div className={classes.button}>
          <Button
            size="large"
            color="gradient"
            variant="outlined"
            component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
            underline="none"
            href="https://docs.google.com/forms/d/1OcvOT-zSG2brjjoR1F_yZiswg8DkNOcRNumitqcoGS4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </Button>
        </div>
        {/* <div className={classes.button}>
          <Button
            disabled
            size="large"
            color="gradient"
            variant="outlined"
            component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
            underline="none"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feature Request
          </Button>
        </div> */}
      </div>
    </Intro>
  );
}

export { DcaPoolIntro };
