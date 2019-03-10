import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  button: rule({
    position: 'relative',
    zIndex: theme.zIndex.modal + 1,
    transform: 'scale(1)',
    transition: 'transform .4s easy, color .4s easy',

    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0)',
    },

    '&$opened': {
      color: '#fff',
    },
  }),

  root: rule({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 7.5}px ${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px`,
    color: '#fff',

    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 9,
    },
  }),

  link: rule({
    display: 'block',
    marginBottom: theme.spacing.unit * 5,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    fontWeight: 600,
    color: 'inherit',
    textDecoration: 'none',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.extra.palette.link.hover,
    },
  }),

  opened: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
