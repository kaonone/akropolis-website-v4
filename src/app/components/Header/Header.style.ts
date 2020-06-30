import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  logoLink: {
    display: 'flex',
    marginRight: 'auto',

    fontSize: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(5),
    },
  },

  logo: {
    width: 'unset',
  },

  navInline: {
    marginLeft: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      marginLeft: theme.spacing(6),
    },
  },
}));
