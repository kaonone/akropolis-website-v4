import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => (
  {
    field: rule({
      marginBottom: theme.spacing.unit * 2,
    }),

    checkBoxField: rule({
      marginLeft: theme.spacing.unit * 2,
      display: 'flex',
      alignItems: 'center',
    }),

    captcha: rule({
      marginBottom: theme.spacing.unit * 2,
    }),

    terms: rule({
      color: theme.colors.royalPurple,
    }),

    submitButton: rule({
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
