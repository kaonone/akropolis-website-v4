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
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
    }),

    labelRoot: rule({
      alignItems: 'flex-start',
    }),

    label: rule({
      fontSize: '1rem',
      paddingTop: 12,
    }),

    submitButton: rule({
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
