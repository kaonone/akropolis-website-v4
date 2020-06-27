import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  title: {
    lineHeight: 1.25,
    '&$medium': {
      fontWeight: 500,

      fontSize: theme.spacing(1.5),
      [theme.breakpoints.up('tabletXS')]: {
        fontSize: theme.spacing(1.75),
      },
      [theme.breakpoints.up('desktopXS')]: {
        fontSize: theme.spacing(2),
      },
    },

    '&$large': {
      fontWeight: 300,

      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up('tabletXS')]: {
        fontSize: theme.spacing(3),
      },
      [theme.breakpoints.up('desktopXS')]: {
        fontSize: theme.spacing(3.75),
      },
    },
  },

  subtitle: {
    marginTop: theme.spacing(0.75),

    fontSize: theme.spacing(1.5),
    lineHeight: 1.25,
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(1.75),
      lineHeight: 1.25,
    },
  },

  description: {
    opacity: 0.5,
    marginTop: theme.spacing(1.25),
    fontSize: theme.spacing(1.5),
    lineHeight: 1.33,
  },

  medium: {},
  large: {},
}));
