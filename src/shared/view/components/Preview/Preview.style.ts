import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
    color: theme.extra.colors.rhino,
  }),

  title: rule({
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.38,
    textTransform: 'uppercase',

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing.unit * 3,
      fontSize: 26,
    },
  }),

  titleIcon: rule({
    display: 'flex',
    fontSize: 56,
    marginRight: theme.spacing.unit * 2,

    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing.unit * 3,
    },
  }),

  description: rule({
    margin: 0,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    lineHeight: 1.63,

    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
      lineHeight: 1.56,
    },
  }),

  moreLink: rule({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    paddingTop: theme.spacing.unit * 2,
    alignSelf: 'flex-start',
    marginTop: 'auto',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    color: 'inherit',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.extra.palette.link.hover,
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing.unit * 3,
      fontSize: 18,
    },
  }),

  moreLinkIcon: rule({
    marginLeft: theme.spacing.unit,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
