import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  title: {
    fontWeight: 300,
    marginBottom: theme.spacing(2.5),

    fontSize: theme.spacing(2.25),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(3.75),
    },

    '&$h3': {
      fontSize: theme.spacing(2),
      fontWeight: 500,
      marginBottom: theme.spacing(1.25),
    },
  },

  description: {
    maxWidth: 820,
    lineHeight: 1.5,
    marginBottom: theme.spacing(5),

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2),
    },
  },

  h2: {},
  h3: {},
}));
