import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({}),

  pagination: rule({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 2,
  }),

  pagItemWrapper: rule({
    padding: theme.spacing.unit * 0.75,
    cursor: 'pointer',
  }),

  pagItem: rule({
    width: theme.spacing.unit,
    height: theme.spacing.unit,
    borderRadius: '50%',
    backgroundColor: '#d8d8d8',

    '&$active': {
      backgroundColor: '#9b9b9b',
    },
  }),

  active: {},
});

export const provideStyles = withStyles(styles, { withTheme: true });

export type StylesProps = WithStyles<typeof styles>;
