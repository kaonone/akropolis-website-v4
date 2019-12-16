import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    flexGrow: 1,
    display: 'flex',
    padding: theme.spacing.unit,
    borderRadius: 6,
    boxShadow: '0 2px 8px 0 rgba(120, 120, 120, 0.2)',
    backgroundColor: '#fff',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
