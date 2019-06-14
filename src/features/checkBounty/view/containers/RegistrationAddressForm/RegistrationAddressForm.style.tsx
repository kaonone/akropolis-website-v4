import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => (
  {
    checkBoxField: rule({
      marginLeft: theme.spacing.unit * 2,
      display: 'flex',
      alignItems: 'center',
    }),

    captcha: rule({
      marginBottom: theme.spacing.unit * 2,
    }),

    terms: rule({
      fontSize: '0.875rem',
    }),

    submitButton: rule({
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
