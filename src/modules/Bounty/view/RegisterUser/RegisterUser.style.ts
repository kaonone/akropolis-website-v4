import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({

  }),

  text: rule({
    maxWidth: theme.extra.sizes.maxContentWidth,
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

  form: rule({
    maxWidth: '31.25rem',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
