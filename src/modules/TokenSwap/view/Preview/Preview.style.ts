import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
  }),

  text: rule({
    fontSize: 20,
    lineHeight: 1.29,
    letterSpacing: 0.1,
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      fontSize: 27,
      lineHeight: 1.56,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 33,
    },
  }),

  description: rule({
    maxWidth: theme.extra.sizes.maxContentWidth,
    composes: '$text',
    marginBottom: theme.spacing.unit * 3,
  }),

  actions: rule({
    maxWidth: '31.25rem',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
