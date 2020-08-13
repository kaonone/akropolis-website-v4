import * as React from 'react';
import cn from 'classnames';

import { Card } from 'app/components/Card';
import { Section } from 'app/components/Section/Section';
import { Preview } from 'app/components/Preview/Preview';
import { makeStyles, getGrid, PaletteType, useTheme } from 'shared/styles';
import { Link, Button, LinkProps, CreditPoolLogo, DcaPoolLogo } from 'shared/view/elements';

import { Build, CreditPool, DcaPool, Colab, AkroOSLogo } from './icons';

interface Product {
  title: string;
  description: React.ReactNode;
  label: string;
  icon: React.ReactElement;
  getLogo: (paletteType: PaletteType) => React.ReactElement;
  extraIcon?: React.ReactElement;
  action: React.ReactElement;
}

interface IProps {
  className?: string;
}

export function Products(props: IProps) {
  const { className } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Section className={className}>
      <div className={classes.container}>
        {useCases.map(({ title, description, icon, getLogo, extraIcon, action, label }, index) => (
          <div key={index} className={classes.item}>
            <Card
              className={cn(classes.card)}
              variant="contained"
              label={label}
              extraTop={<div className={classes.icon}>{icon}</div>}
              extraBottom={<div className={classes.action}>{action}</div>}
            >
              <Preview title={title} titleSize="large" description={description} />
              {extraIcon && <div className={classes.extraIcon}>{extraIcon}</div>}
              <div className={classes.logoIcon}>{getLogo(theme.palette.type)}</div>
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
    description: (
      <span>
        Start and scale your for-profit DAO here. Built with{' '}
        <Link href="https://openzeppelin.com/sdk/" color="inherit" target="_blank" rel="noopener noreferrer">
          OpenZeppelin SDK
        </Link>{' '}
        using{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Facade_pattern"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facade pattern
        </Link>{' '}
        for rapid development and freedom to innovate. Monetise your assets and ideas.
      </span>
    ),
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
    getLogo: (type) => <AkroOSLogo color={type === 'dark' ? 'inherit' : undefined} fontSize="inherit" />,
  },
  {
    title: 'Borrow or Lend',
    description:
      'Access under-collateralised loans. Contribute liquidity actively or passively. Get rewarded for risk.',
    label: 'For DeFi curious',
    action: (
      <Button
        fullWidth
        component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
        underline="none"
        color="gradient"
        variant="contained"
        href="https://sparta.akropolis.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Borrow
      </Button>
    ),
    icon: <CreditPool fontSize="inherit" />,
    getLogo: () => <CreditPoolLogo color="inherit" fontSize="inherit" />,
  },
  {
    title: 'Save & Earn',
    description:
      'Simple and easy. Connect your monthly check to compound DeFi yields, capital gains* and saver rewards, all in one account. Automated and non-custodial.',
    label: 'For normies',
    action: (
      <Button
        fullWidth
        component={Link as React.FunctionComponent<Omit<LinkProps, 'color' | 'variant'>>}
        underline="none"
        color="gradient"
        variant="contained"
        href="https://delphi.akropolis.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Earn
      </Button>
    ),
    icon: <DcaPool fontSize="inherit" />,
    getLogo: () => <DcaPoolLogo color="inherit" fontSize="inherit" />,
    extraIcon: (
      <Link
        underline="none"
        href="https://medium.com/ideo-colab/announcing-ideos-product-validation-day-for-defi-founders-79e5668f9e3c"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <Colab />
      </Link>
    ),
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
    display: 'flex',
    color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.heliotrope,
  },

  logoIcon: {
    position: 'absolute',
    top: 26,
    left: 16,
    fontSize: 24,
    display: 'flex',
    color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.black,
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
        '&:nth-child(1) $logoIcon': {
          color: theme.colors.white,
        },
        '&:nth-child(2) $logoIcon': {
          color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.royalBlue2,
        },
        '&:nth-child(3) $logoIcon': {
          color: theme.palette.type === 'dark' ? theme.colors.white : theme.colors.heliotrope,
        },
      },
    },
  ),
}));
