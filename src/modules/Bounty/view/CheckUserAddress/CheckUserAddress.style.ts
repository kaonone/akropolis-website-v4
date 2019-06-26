import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => ({
  root: rule({

  }),

  title: rule({
    marginBottom: theme.spacing.unit * 3,
  }),

  tokensAmount: rule({
    marginBottom: theme.spacing.unit * 3,
  }),

  form: rule({
    maxWidth: '31.25rem',
  }),

});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
