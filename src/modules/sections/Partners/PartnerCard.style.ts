import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 125,
    padding: theme.spacing.unit,
    borderRadius: 6,
    boxShadow: '0 2px 8px 0 rgba(120, 120, 120, 0.2)',
    backgroundColor: '#fff',

    [theme.breakpoints.up('md')]: {
      height: 168,
      padding: theme.spacing.unit * 2,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
