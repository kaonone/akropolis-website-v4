import * as React from 'react';
import cn from 'classnames';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { makeStyles, getGrid } from 'shared/styles';
import { Preview } from 'app/components/Preview/Preview';
import { Ethereum, Polkadot, Web3, Zrx, Coinlist } from './icons';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';

interface Product {
  title: string;
  description: string;
  label?: string;
  icons: React.ReactElement[];
  extraIcon?: React.ReactElement;
}

interface IProps {
  className?: string;
}

const tKeys = tKeysAll.new.openSource;

export function OpenSource(props: IProps) {
  const { className } = props;
  const classes = useStyles();
  const { t } = useTranslate();

  return (
    <Section className={className} title={t(tKeys.title.getKey())} description={t(tKeys.description.getKey())}>
      <div className={classes.container}>
        {useCases.map(({ title, description, icons, extraIcon, label }, index) => (
          <div key={index} className={classes.item}>
            <Card className={cn(classes.card)} variant="contained" label={label} icons={icons}>
              <Preview title={title} description={description} />
              {extraIcon && <div className={classes.extraIcon}>{extraIcon}</div>}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

// tslint:disable: max-line-length
// tslint:disable: jsx-wrap-multiline
// tslint:disable: jsx-key
const useCases: Product[] = [
  {
    title: 'Polkahub',
    description: 'Platform-as-a-Service for Substrate Nodes',
    label: 'WEB3 Foundation Grant',
    icons: [<Web3 fontSize="inherit" />, <Polkadot fontSize="inherit" />],
  },
  {
    title: 'Cashflow relay',
    description:
      'Set up and trade Commitments to Future Cashflows (C2FC), an early DeFi financial primitive equivalent to tokenised cashflow financing',
    label: '0x+Coinlist Global Hackathon Winner',
    icons: [<Zrx fontSize="inherit" />, <Ethereum fontSize="inherit" />],
    extraIcon: <Coinlist fontSize="inherit" />,
  },
  {
    title: 'Pensify',
    description: 'Pensify is a non-custodial and risk-minimised Pension Fund built on Ethereum blockchain',
    label: 'Hack Money Hackaton Special Prize',
    icons: [<Ethereum fontSize="inherit" />],
  },
  {
    title: 'WEB3 Wallets Kit',
    description: 'Package for connecting different Ethereum wallets for dApp',
    icons: [<Ethereum fontSize="inherit" />],
  },
  {
    title: 'Polkahub Bridge',
    description: 'Вridge for self transfers of DAI Token (ERC20) to sDAI (ERC20 representation)',
    icons: [<Polkadot fontSize="inherit" />],
  },
  {
    title: 'Staking portal',
    description: 'Frontend for Polkadot chain',
    icons: [<Polkadot fontSize="inherit" />],
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
    top: 24,
    right: 12,
    fontSize: 8,
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
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(2.5),
      },
      {
        breakpoint: 'tabletSM',
        count: 2,
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
      item: {},
    },
  ),
}));
