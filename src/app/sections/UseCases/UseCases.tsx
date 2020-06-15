import * as React from 'react';
import cn from 'classnames';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { makeStyles, getGrid } from 'shared/styles';
import { Preview } from 'app/components/Preview/Preview';
import { Link } from 'shared/view/elements';

const tKeys = tKeysAll.new.features;

interface UseCase {
  title: string;
  subtitle?: React.ReactNode;
  description: string;
}

interface IProps {
  className?: string;
}

export function UseCases(props: IProps) {
  const { className } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  return (
    <Section className={className} title={t(tKeys.title.getKey())}>
      <div className={classes.container}>
        {useCases.map(({ description, subtitle, title }, index) => (
          <div key={index} className={classes.item}>
            <Card className={cn(classes.card)} variant="contained">
              <Preview title={title} subtitle={subtitle} description={description} />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

const useCases: UseCase[] = [
  {
    title: 'Pension Fund',
    description:
      'Keep custody of your assets. Earn more than in a bank. Unraidable pension fund, accessible from anywhere',
  },
  {
    title: 'Community bank',
    description: 'Non-fractional reserve banking without shareholders: credit, pay-day loans by the users to the users',
  },
  {
    title: 'Informal insurance',
    subtitle: (
      <span>
        e.g.{' '}
        <Link
          color="textPrimary"
          href="https://en.wikipedia.org/wiki/Broodfonds"
          target="_blank"
          rel="noopener noreferrer"
        >
          Broodfonds
        </Link>
      </span>
    ),
    description: 'Pool capital to cover for risk cases not offered by traditional insurance',
  },
];

const useStyles = makeStyles((theme) => ({
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
    },
  ),

  card: {
    height: '100%',

    minHeight: theme.spacing(15),
    padding: theme.spacing(2.5),
    [theme.breakpoints.up('tabletSM')]: {
      minHeight: theme.spacing(19),
      padding: theme.spacing(4),
    },
  },
}));
