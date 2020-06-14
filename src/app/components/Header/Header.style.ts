import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    alignItems: 'center',
  }),

  logo: rule({
    display: 'flex',
    marginRight: 'auto',

    fontSize: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(5),
    },
  }),

  navInline: rule({
    marginLeft: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      marginLeft: theme.spacing(6),
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
