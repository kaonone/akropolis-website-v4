import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    padding: theme.extra.spacing.horizontalPagePaddings.xs.medium,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    color: theme.extra.colors.rhino,
    maxWidth: theme.extra.sizes.maxContentWidth,

    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing.unit * 3}px ${theme.extra.spacing.horizontalPagePaddings.md.medium}px`,
    },

    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing.unit * 4}px ${theme.extra.spacing.horizontalPagePaddings.lg.large}px`,
    },
  }),

  logo: rule({
    display: 'flex',
    marginRight: 'auto',
    fontSize: 36,
    color: 'inherit',

    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
    },
  }),

  navInline: rule({
    display: 'none',
    marginRight: theme.spacing.unit * 4,

    [theme.breakpoints.up(1140)]: {
      display: 'block',
    },
  }),

  navDrawer: rule({
    display: 'block',
    marginLeft: theme.spacing.unit * 2,

    [theme.breakpoints.up(1140)]: {
      display: 'none',
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
