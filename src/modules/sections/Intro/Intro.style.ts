import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import bgUrl from './intro_bg.jpg';

const styles = (theme: Theme) => {
  return {
    root: rule({
      minHeight: `calc(100vh + ${theme.extra.spacing.layoutContentSkew.xsHeight}px)`,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      // tslint:disable-next-line:max-line-length
      padding: `${theme.extra.spacing.headerHeight.xs}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px calc(27vh + ${theme.extra.spacing.headerHeight.xs}px)`,
      position: 'relative',
      background: `url(${bgUrl}) no-repeat center bottom/cover`,
      color: theme.extra.colors.rhino,

      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing.unit * 2.5,
        paddingRight: theme.spacing.unit * 2.5,
      },

      [theme.breakpoints.up('md')]: {
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.md}px ${theme.extra.spacing.horizontalPagePaddings.md.large}px calc(27vh + ${theme.extra.spacing.headerHeight.md}px)`,
      },

      [theme.breakpoints.up('lg')]: {
        minHeight: `calc(100vh + ${theme.extra.spacing.layoutContentSkew.lgHeight}px)`,
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.lg}px ${theme.spacing.unit * 10}px calc(27vh + ${theme.extra.spacing.headerHeight.lg}px)`,
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
        fontSize: 56,
        lineHeight: 1.21,
        letterSpacing: '-0.5px',
      },
    }),

    subtitle: rule({
      width: '100%',
      maxWidth: theme.extra.sizes.maxContentWidth,
      margin: `0 auto auto`,
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
        fontSize: 36,
      },
    }),
  };
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
