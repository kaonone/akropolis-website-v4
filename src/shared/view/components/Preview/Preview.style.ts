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
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.38,
    textTransform: 'uppercase',

    [theme.breakpoints.up('lg')]: {
      fontSize: 26,
    },
  }),

  subtitle: rule({
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 'normal',
    color: '#9b9b9b',
  }),

  titleIcon: rule({
    display: 'flex',
    fontSize: 56,
    marginRight: theme.spacing(2),

    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(3),
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

  footer: rule({
    marginTop: 'auto',
    paddingTop: theme.spacing(2),
    alignSelf: 'flex-start',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    lineHeight: 1.8,

    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(3),
      fontSize: 18,
    },
  }),

  moreLink: rule({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    color: 'inherit',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.palette.action.hover,
    },
  }),

  moreLinkIcon: rule({
    marginLeft: theme.spacing(1),
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
