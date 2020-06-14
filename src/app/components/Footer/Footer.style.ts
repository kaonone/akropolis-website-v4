import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    flexWrap: 'wrap',
    [theme.breakpoints.up('tabletXS')]: {
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
  },

  address: {
    width: '100%',
    opacity: 0.3,

    marginBottom: theme.spacing(3.75),
    lineHeight: 1.6,
    fontSize: theme.spacing(1.25),
    [theme.breakpoints.up('tabletXS')]: {
      width: 'unset',
      maxWidth: theme.spacing(62),
      marginBottom: 0,
      lineHeight: 1.33,
      fontSize: theme.spacing(1.5),
    },
    [theme.breakpoints.up('desktopXS')]: {
      lineHeight: 'unset',
      maxWidth: 'unset',
    },
  },

  nav: {
    width: '100%',
    [theme.breakpoints.up('tabletXS')]: {
      width: 'unset',
      marginLeft: theme.spacing(2),
    },
  },
}));
