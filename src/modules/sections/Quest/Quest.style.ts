import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

import morningBg from './morning.svg';
import dayBg from './day.svg';
import nightBg from './night.svg';

const styles = (theme: Theme) => {
  return {
    root: rule({
      minHeight: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      // tslint:disable-next-line:max-line-length
      padding: `${theme.extra.spacing.headerHeight.xs}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px ${theme.extra.spacing.headerHeight.xs + theme.spacing.unit * 2}px`,
      position: 'relative',
      color: theme.extra.colors.rhino,
      transition: theme.transitions.create('background'),

      '&$isMorning': {
        background: `url(${morningBg}) no-repeat center top/cover`,
      },
      '&$isDay': {
        background: `url(${dayBg}) no-repeat center top/cover`,
      },
      '&$isNight': {
        background: `url(${nightBg}) no-repeat center top/cover`,
      },

      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing.unit * 2.5,
        paddingRight: theme.spacing.unit * 2.5,
      },

      [theme.breakpoints.up('md')]: {
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.md}px ${theme.extra.spacing.horizontalPagePaddings.md.large}px`,
      },

      [theme.breakpoints.up('lg')]: {
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.lg}px ${theme.spacing.unit * 10}px`,
      },
    }),

    title: rule({
      width: '100%',
      maxWidth: theme.extra.sizes.maxContentWidth,
      margin: `auto`,
      paddingBottom: theme.spacing.unit,
      fontFamily: theme.extra.typography.primaryFont,
      fontSize: 26,
      fontWeight: 'bold',
      lineHeight: 1.38,
      letterSpacing: '-0.2px',
      textAlign: 'center',
      textTransform: 'uppercase',

      [theme.breakpoints.up('md')]: {
        fontSize: 38,
        lineHeight: 1.26,
        letterSpacing: '-0.3px',
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 50,
        lineHeight: 1.21,
        letterSpacing: '-0.5px',
      },
    }),

    subtitle: rule({
      width: '100%',
      maxWidth: theme.extra.sizes.maxContentWidth,
      margin: `0 auto auto`,
      paddingBottom: 12,
      fontFamily: theme.extra.typography.primaryFont,
      fontSize: 20,
      lineHeight: 1.29,
      letterSpacing: 0.1,
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        fontSize: 27,
        lineHeight: 1.56,
        letterSpacing: 0.1,
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 33,
      },
    }),

    isMorning: {},
    isDay: {},
    isNight: {},

    button: rule({
      marginBottom: 'auto',
      minWidth: 150,
      alignSelf: 'center',
      height: theme.spacing.unit * 5,
      borderRadius: theme.spacing.unit * 2.5,
      background: 'linear-gradient(to bottom, #e66afd, #8238fc)',

      [theme.breakpoints.up('md')]: {
        minWidth: 200,
        fontSize: '1rem',
        height: theme.spacing.unit * 6,
        borderRadius: theme.spacing.unit * 3,
      },

      [theme.breakpoints.up('lg')]: {
        minWidth: 250,
        fontSize: '1.25rem',
        height: theme.spacing.unit * 7,
        borderRadius: theme.spacing.unit * 3.5,
      },
    }),

    resultsContainer: rule({
      maxWidth: theme.extra.sizes.maxContentWidth,
      width: '100%',
      margin: `auto auto 0`,
    }),

    results: rule({
      justifyContent: 'space-between',

      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
      },
    }),

    footer: rule({
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
    }),
  };
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
