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
    color: theme.extra.colors.rhino,
    textDecoration: 'none',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 2,
    },
  }),

  title: rule({
    margin: 0,
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.38,
    textTransform: 'uppercase',

    [theme.breakpoints.up('lg')]: {
      fontSize: 26,
    },
  }),

  description: rule({
    margin: 0,
    marginTop: theme.spacing.unit * 2,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    lineHeight: 1.63,
    whiteSpace: 'pre-wrap',

    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing.unit * 3,
      fontSize: 18,
      lineHeight: 1.56,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
