import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import bgUrl from './intro_bg.jpg';

const styles = (theme: Theme) => {
  return {
    root: rule({
      minHeight: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      padding: `${theme.spacing.unit * 13}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px`,
      position: 'relative',
      background: `url(${bgUrl}) no-repeat center 0/cover`,
      color: theme.extra.colors.rhino,

      [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing.unit * 15}px ${theme.extra.spacing.horizontalPagePaddings.md.large}px`,
      },

      [theme.breakpoints.up('lg')]: {
        padding: `${theme.spacing.unit * 17.5}px ${theme.extra.spacing.horizontalPagePaddings.lg.large}px`,
      },
    }),

    title: rule({
      width: '100%',
      margin: `0 0 ${theme.spacing.unit * 9}px`,
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
      margin: `0 0 auto`,
      fontFamily: theme.extra.typography.primaryFont,
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: 0.1,
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        fontSize: 18,
        lineHeight: 1.56,
        letterSpacing: 0.1,
      },

      [theme.breakpoints.up('md')]: {
        fontSize: 22,
      },
    }),
  };
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;