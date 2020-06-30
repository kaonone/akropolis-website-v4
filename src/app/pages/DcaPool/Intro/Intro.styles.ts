import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    alignItems: 'center',

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2.5),
    },
  },

  disclaimer: {
    minWidth: 240,
    fontWeight: 300,
    fontSize: 12,

    marginLeft: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 15,
      marginLeft: theme.spacing(2.5),
    },
  },
}));

export { useStyles };
