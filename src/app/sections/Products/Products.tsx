import * as React from 'react';
import cn from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { makeStyles, getGrid } from 'shared/styles';
import { Preview } from 'app/components/Preview/Preview';
import { Link, Button, LinkProps } from 'shared/view/elements';
import { Build, CreditPool, DcaPool, Colab } from './icons';
import routes from 'modules/routes';

interface Product {
  title: string;
  description: string;
  label: string;
  icon: React.ReactElement;
  extraIcon?: React.ReactElement;
  action: React.ReactElement;
}

interface IProps {
  className?: string;
}

export function Products(props: IProps) {
  const { className } = props;
  const classes = useStyles();

  return (
    <Section className={className}>
      <div className={classes.container}>
        {useCases.map(({ title, description, icon, extraIcon, action, label }, index) => (
          <div key={index} className={classes.item}>
            <Card
              className={cn(classes.card)}
              variant="contained"
              label={label}
              extraTop={<div className={classes.icon}>{icon}</div>}
              extraBottom={<div className={classes.action}>{action}</div>}
            >
              <Preview title={title} titleTheme="large" description={description} />
              {extraIcon && <div className={classes.extraIcon}>{extraIcon}</div>}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

// tslint:disable: max-line-length
const useCases: Product[] = [
  {
    title: 'Build',
    description:
      'Start and scale your for-profit DAO here. Built with OpenZeppelin SDK using Facade pattern for rapid development and freedom to innovate. Monetise your assets and ideas.',
    label: 'For builders',
    action: (
      <Button
        fullWidth
        component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
        underline="none"
        color="gradient"
        variant="contained"
        href="https://github.com/akropolisio/akropolisOS"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Building
      </Button>
    ),
    icon: <Build fontSize="inherit" />,
  },
  {
    title: 'Borrow or Lend',
    description:
      'Access under-collateralised loans. Contribute liquidity actively or passively. Get rewarded for risk.',
    label: 'For DeFi curious',
    action: (
      <Button<typeof RouterLink>
        fullWidth
        component={RouterLink}
        to={routes['credit-pool'].getRedirectPath()}
        color="gradient"
        variant="contained"
      >
        Borrow
      </Button>
    ),
    icon: <CreditPool fontSize="inherit" />,
  },
  {
    title: 'Save & Earn',
    description:
      'Simple and easy. Connect your monthly check to compound DeFi yields, capital gains* and saver rewards, all in one account. Automated and non-custodial.',
    label: 'For normies',
    action: (
      <Button<typeof RouterLink>
        fullWidth
        component={RouterLink}
        to={routes['dca-pool'].getRedirectPath()}
        color="gradient"
        variant="contained"
      >
        Start Earning
      </Button>
    ),
    icon: <DcaPool fontSize="inherit" />,
    extraIcon: <Colab />,
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',

    padding: theme.spacing(2, 2.5),
    [theme.breakpoints.up('tabletSM')]: {
      padding: theme.spacing(3.75, 5),
    },
  },

  extraIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
    fontSize: 70,
    color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.heliotrope3,
  },

  icon: {
    minHeight: theme.spacing(7.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.spacing(5.75),
  },

  action: {
    maxWidth: theme.spacing(22),
    margin: '0 auto',
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
        '&:nth-child(1) $icon': {
          color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.anakiwa,
        },
        '&:nth-child(2) $icon': {
          color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.melrose,
        },
        '&:nth-child(3) $icon': {
          color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.blushPink,
        },
      },
    },
  ),
}));
