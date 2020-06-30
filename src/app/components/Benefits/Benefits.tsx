import * as React from 'react';
import cn from 'classnames';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { makeStyles, getGrid } from 'shared/styles';
import { Preview } from 'app/components/Preview/Preview';

export interface Benefit {
  title: string;
  description: string;
}

interface IProps {
  className?: string;
  benefits: Benefit[];
}

export function Benefits(props: IProps) {
  const { className, benefits } = props;
  const classes = useStyles();

  return (
    <Section className={className}>
      <div className={classes.container}>
        {benefits.map(({ title, description }, index) => (
          <div key={index} className={classes.item}>
            <Card className={cn(classes.card)} variant="contained">
              <Preview title={title} description={description} />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    padding: theme.spacing(2, 2.5),

    [theme.breakpoints.up('tabletSM')]: {
      padding: theme.spacing(3.75, 5),
    },

    [theme.breakpoints.up('desktopMD')]: {
      padding: theme.spacing(3.75, 2.50),
    },
  },

  ...getGrid(
    theme,
    [
      {
        breakpoint: 'mobileXS',
        count: 1,
        hPadding: theme.spacing(0),
        vPadding: theme.spacing(2.5),
      },
      {
        breakpoint: 'tabletXS',
        count: 3,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(2.5),
      },
      {
        breakpoint: 'tabletSM',
        count: 3,
        hPadding: theme.spacing(3.75),
        vPadding: theme.spacing(3.75),
      },
      {
        breakpoint: 'desktopXS',
        count: 3,
        hPadding: theme.spacing(4.5),
        vPadding: theme.spacing(4.5),
      },
      {
        breakpoint: 'desktopSM',
        count: 3,
        hPadding: theme.spacing(4.75),
        vPadding: theme.spacing(4.75),
      },
      {
        breakpoint: 'desktopMD',
        count: 3,
        hPadding: theme.spacing(5),
        vPadding: theme.spacing(5),
      },
      {
        breakpoint: 'desktopLG',
        count: 3,
        hPadding: theme.spacing(8),
        vPadding: theme.spacing(8),
      },
      {
        breakpoint: 'desktopXL',
        count: 3,
        hPadding: theme.spacing(12.5),
        vPadding: theme.spacing(12.5),
      },
    ],
    {
      container: {
        justifyContent: 'center',
      },
      item: {
        '&:nth-child(1) $card': {
          background: theme.gradients.products[0].linear(),
        },
        '&:nth-child(2) $card': {
          background: theme.gradients.products[1].linear(),
        },
        '&:nth-child(3) $card': {
          background: theme.gradients.products[2].linear(),
        },
      },
    },
  ),
}));
