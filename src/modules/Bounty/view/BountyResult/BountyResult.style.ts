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

  tokensAmount: rule({
    composes: '$text',
    marginBottom: theme.spacing.unit * 3,
  }),

  error: rule({
    composes: '$text',
    marginBottom: theme.spacing.unit * 3,
  }),

  button: rule({
    padding: `0 ${theme.spacing.unit * 4}px`,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
