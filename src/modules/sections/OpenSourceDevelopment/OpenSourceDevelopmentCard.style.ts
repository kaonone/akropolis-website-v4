import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    flexGrow: 1,
    padding: theme.spacing(1),
    borderRadius: 6,
    boxShadow: '0 2px 8px 0 rgba(120, 120, 120, 0.2)',
    backgroundColor: '#fff',
    color: theme.extra.colors.rhino,
    textDecoration: 'none',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  }),

  link: rule({
    display: 'flex',
    alignItems: 'baseline',
    padding: 0,
    color: 'inherit',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.extra.palette.link.hover,
    },
  }),

  linkIcon: rule({
    position: 'relative',
    top: '0.1em',
    fontSize: 20,
    marginLeft: theme.spacing(1),

    [theme.breakpoints.up('lg')]: {
      fontSize: 26,
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
    marginTop: theme.spacing(2),
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    lineHeight: 1.63,
    whiteSpace: 'pre-wrap',

    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(3),
      fontSize: 18,
      lineHeight: 1.56,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
