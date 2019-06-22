import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

import backgroundIrl from './img/background.jpg';

const styles = (theme: Theme) => ({
  root: rule({
    background: `url(${backgroundIrl}) no-repeat center bottom/cover`,
    overflow: 'hidden',
    color: theme.extra.colors.rhino,
    minHeight: '100vh',

    padding: `${theme.extra.spacing.headerHeight.xs}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px`,

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 2.5,
      paddingRight: theme.spacing.unit * 2.5,
    },

    [theme.breakpoints.up('md')]: {
      padding: `${theme.extra.spacing.headerHeight.md}px ${theme.extra.spacing.horizontalPagePaddings.md.large}px`,
    },

    [theme.breakpoints.up('lg')]: {
      padding: `${theme.extra.spacing.headerHeight.lg}px ${theme.spacing.unit * 10}px`,
    },
  }),

  title: rule({
    width: '100%',
    marginTop: 0,
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      fontSize: 38,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 50,
    },
  }),

  content: rule({
    padding: `${theme.extra.spacing.layoutContentSkew.lgHeight}px 0`,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
