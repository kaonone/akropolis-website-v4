import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  button: rule({
    '&$open': {
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },

    '&$close': {
      color: '#fff',
      marginLeft: 'auto',
    },
  }),

  root: rule({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.extra.spacing.horizontalPagePaddings.xs.medium,
    color: '#fff',

    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing.unit * 3}px ${theme.extra.spacing.horizontalPagePaddings.md.medium}px`,
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: `${theme.spacing.unit * 4}px`,
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

  socials: rule({
    marginTop: 'auto',
    color: theme.extra.colors.amethystSmoke,
  }),

  open: {},
  close: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
