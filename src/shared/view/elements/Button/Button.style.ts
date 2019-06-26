import { withStyles as muiWithStyles } from '@material-ui/core/styles';
import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    '&$gradient': rule({
      color: theme.extra.colors.white,
      marginBottom: 'auto',
      alignSelf: 'center',
      fontSize: '1rem',

      minHeight: theme.spacing.unit * 6,
      borderRadius: theme.spacing.unit * 3,
      background: 'linear-gradient(to bottom, #e66afd, #8238fc)',

      '&$disabled': rule({
        background: `rgba(0, 0, 0, 0.12)`,
      }),
    }),
  }),

  gradient: {},

  disabled: {},

});

export const provideStyles = (muiWithStyles as typeof withStyles)(styles);

export type StylesProps = WithStyles<typeof styles>;
