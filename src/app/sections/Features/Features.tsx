import * as React from 'react';
import cn from 'classnames';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { makeStyles, CSSProperties, Theme } from 'shared/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Preview } from 'app/components/Preview/Preview';

const tKeys = tKeysAll.new.features;

type Status = 'inProgress' | 'roadmap';

interface IFeature {
  title: string;
  description: string;
  status?: Status;
}

interface IProps {
  className?: string;
}

export function Features(props: IProps) {
  const { className } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  return (
    <Section className={className} title={t(tKeys.title.getKey())}>
      <div className={classes.container}>
        {features.map(({ description, status, title }, index) => (
          <div className={classes.item}>
            <Card
              key={index}
              className={cn(classes.card, {
                [classes.inProgress]: status === 'inProgress',
                [classes.roadmap]: status === 'roadmap',
              })}
              label={status && t(tKeys.labels[status].getKey())}
              variant="contained"
            >
              <Preview title={title} description={description} />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

const features: IFeature[] = [
  {
    title: 'Borderless',
    description: 'Access the lending market from anywhere around the world',
  },
  {
    title: 'Trust-minimised',
    description:
      // tslint:disable-next-line: max-line-length
      'No centralized party to rely on to borrow or lend. Your pension fund cannot be raided, this bank account cannot be closed',
  },
  {
    title: 'Fraud-resistant',
    description: 'Real-time NAV, immutable and auditable lend/borrow/invest transactions 24/7/365',
  },
  {
    title: 'Portable track record',
    description: 'Seamlessly port your track record of contributions and credit to another DAO/LAO/Capital pool',
  },
  {
    title: 'Uncollateralised',
    description: 'Borrow with little to no collateral, build up your reputation and improve your economics',
  },
  {
    title: 'Seamless',
    description: 'Connect your debit card',
    status: 'inProgress',
  },
  {
    title: 'Crypto/Fiat Payment Gateway',
    description: 'Convenient fiat on/off ramp',
    status: 'inProgress',
  },
  {
    title: 'Insurance: NexusMutual/Opyn',
    description: 'Downside protection: depositor protection scheme equivalence using NexusMutual and Opyn',
    status: 'roadmap',
  },
  {
    title: 'Governance portal',
    description: 'Managing protocol parameters through governance with AKRO token',
    status: 'roadmap',
  },
  {
    title: 'USDT, USDC, RSV stablecoins support',
    description: 'Asset universe: enable deposits of USDT, USDC, RSV',
    status: 'roadmap',
  },
];

const useStyles = makeStyles((theme) => ({
  ...getGrid(
    theme,
    [
      {
        breakpoint: 'mobileXS',
        count: 2,
        hPadding: theme.spacing(2.5),
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
        count: 5,
        hPadding: theme.spacing(3.5),
        vPadding: theme.spacing(5),
      },
      {
        breakpoint: 'desktopXS',
        count: 5,
        hPadding: theme.spacing(4.25),
        vPadding: theme.spacing(5),
      },
      {
        breakpoint: 'desktopMD',
        count: 5,
        hPadding: theme.spacing(5),
        vPadding: theme.spacing(5),
      },
    ],
    {
      container: {
        justifyContent: 'center',
      },
    },
  ),

  card: {
    minHeight: theme.spacing(16),
    height: '100%',
    padding: theme.spacing(2.5, 1.25, 1),
    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(2.5, 2.25, 2),
    },
    [theme.breakpoints.up('desktopSM')]: {
      paddingTop: theme.spacing(3.75),
    },

    '&$inProgress': {
      backgroundColor: theme.palette.type === 'light' ? theme.colors.titanWhite : theme.colors.scarpaFlow2,
    },
    '&$roadmap': {
      backgroundColor: theme.palette.type === 'light' ? theme.colors.foam : theme.colors.comet,
    },
  },

  inProgress: {},
  roadmap: {},
}));

interface BreakpointConfig {
  breakpoint: Breakpoint;
  vPadding: number;
  hPadding: number;
  count: number;
}

type StyleRules = CSSProperties & Record<Exclude<string, keyof CSSProperties>, CSSProperties>;

function getGrid(
  theme: Theme,
  configs: BreakpointConfig[],
  styles: {
    container?: StyleRules;
    item?: StyleRules;
  } = {},
): { container: StyleRules; item: StyleRules } {
  const { container = {}, item = {} } = styles;
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      ...configs.reduce<StyleRules>(
        (acc, { breakpoint, hPadding, vPadding }) => ({
          ...acc,
          [theme.breakpoints.up(breakpoint)]: {
            ...container[theme.breakpoints.up(breakpoint)],
            width: `calc(100% + ${hPadding}px)`,
            margin: `${-hPadding / 2}px ${-vPadding / 2}px`,
          },
        }),
        container,
      ),
    },
    item: {
      ...configs.reduce<StyleRules>((acc, { breakpoint, count, hPadding, vPadding }) => {
        const percent = Math.floor((100 * 1000000) / count) / 1000000;
        return {
          ...acc,
          [theme.breakpoints.up(breakpoint)]: {
            ...item[theme.breakpoints.up(breakpoint)],
            maxWidth: `${percent}%`,
            flexBasis: `${percent}%`,
            padding: `${hPadding / 2}px ${vPadding / 2}px`,
          },
        };
      }, item),
    },
  };
}
