import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  title: {
    fontWeight: 500,

    fontSize: theme.spacing(1.5),
    lineHeight: 1.25,
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(1.75),
      lineHeight: 1.25,
    },
    [theme.breakpoints.up('desktopXS')]: {
      fontSize: theme.spacing(2),
      lineHeight: 1.25,
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
}));
