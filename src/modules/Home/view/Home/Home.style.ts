import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

import youCanBg from './imgs/Sketch-Blue.png';

const styles = (theme: Theme) => ({
  root: rule({
    //
  }),

  block: rule({
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `0 auto`,
    paddingTop: theme.spacing.unit * 4,

    '&:last-child': {
      paddingBottom: theme.spacing.unit * 4,
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing.unit * 6,

      '&:last-child': {
        paddingBottom: theme.spacing.unit * 6,
      },
    },

    '&$products': {
      paddingLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      paddingRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },
    },

    '&$youCan': {
      background: `url(${youCanBg}) no-repeat center ${theme.spacing.unit * 10}px/cover`,
      paddingLeft: theme.extra.spacing.horizontalPagePaddings.xs.large,
      paddingRight: theme.extra.spacing.horizontalPagePaddings.xs.large,

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },

      [theme.breakpoints.up('lg')]: {
        backgroundPositionY: theme.spacing.unit * 12,
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.lg.medium,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.lg.medium,
      },
    },

    '&$partners': {
      paddingLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      paddingRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.md.small,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.md.small,
      },
    },

    '&$news': {
      paddingLeft: theme.extra.spacing.horizontalPagePaddings.xs.small,
      paddingRight: theme.extra.spacing.horizontalPagePaddings.xs.small,

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.md.large,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.md.large,
      },

      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.extra.spacing.horizontalPagePaddings.lg.large,
        paddingRight: theme.extra.spacing.horizontalPagePaddings.lg.large,
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
