import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const borderRadius = 6;

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px ${theme.spacing(0.5)}px`,
    paddingLeft: theme.spacing(3),
    flexGrow: 1,
    borderRadius,
    boxShadow: '0 2px 8px 0 rgba(120, 120, 120, 0.2)',
    backgroundColor: '#ffffff',

    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(2.5)}px ${theme.spacing(2.5)}px ${theme.spacing(1.5)}px`,
      paddingLeft: theme.spacing(4),
    },

    '&:before': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 5,
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      content: '""',
      backgroundImage: 'linear-gradient(to bottom, #b46fd7, #0674c5)',
    },
  }),

  summary: rule({
    margin: 0,
    marginBottom: theme.spacing(0.5),
    fontSize: 12,
    lineHeight: 2.17,
    color: '#000',

    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(1.5),
      fontSize: 14,
      lineHeight: 1.86,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      lineHeight: 1.63,
    },
  }),

  footer: rule({
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    color: '#9b9b9b',
  }),

  icon: rule({
    width: 'unset',
    marginRight: theme.spacing(1.5),
    fontSize: 20,

    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2.5),
      fontSize: 24,
    },

    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(3.5),
    },
  }),

  date: rule({
    fontSize: 10,
    paddingRight: theme.spacing(1.5),
    marginRight: 'auto',

    [theme.breakpoints.up('md')]: {
      fontSize: 12,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
    },
  }),

  linkIcon: rule({
    fontSize: 20,

    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },

    '&$hidden': {
      visibility: 'collapse',
    },
  }),

  hidden: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
