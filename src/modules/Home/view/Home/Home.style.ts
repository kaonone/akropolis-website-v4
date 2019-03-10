import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    //
  }),

  block: rule({
    marginTop: theme.spacing.unit * 4,

    '&:last-child': {
      marginBottom: theme.spacing.unit * 4,
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing.unit * 6,

      '&:last-child': {
        marginBottom: theme.spacing.unit * 6,
      },
    },

    '&$products': {
      marginLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      marginRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },
    },

    '&$youCan': {
      marginLeft: theme.extra.spacing.horizontalPagePaddings.xs.large,
      marginRight: theme.extra.spacing.horizontalPagePaddings.xs.large,

      [theme.breakpoints.up('md')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.lg.medium,
        marginRight: theme.extra.spacing.horizontalPagePaddings.lg.medium,
      },
    },

    '&$partners': {
      marginLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      marginRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },
    },

    '&$news': {
      marginLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      marginRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.md.large,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.large,
      },

      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.extra.spacing.horizontalPagePaddings.lg.large,
        marginRight: theme.extra.spacing.horizontalPagePaddings.lg.large,
      },
    },
  }),

  products: {},
  youCan: {},
  partners: {},
  news: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
