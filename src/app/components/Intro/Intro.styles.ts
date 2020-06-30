import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    display: 'flex',
    fontSize: theme.spacing(8.25),
    marginBottom: theme.spacing(5),
  },
  title: {
    maxWidth: 1050,
    fontWeight: 200,

    fontSize: theme.spacing(2.75),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(5),
      marginBottom: theme.spacing(1.75),
    },
  },
  description: {
    fontWeight: 300,

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2),
    },
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2.75),
    },
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up('tabletXS')]: {
      marginTop: theme.spacing(5),
    },
  },
}));

export { useStyles };
