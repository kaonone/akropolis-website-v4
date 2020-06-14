import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },

  item: {
    marginRight: 'auto',

    fontSize: theme.spacing(1.25),
    marginLeft: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(1.5),
    },
    [theme.breakpoints.up('desktopSM')]: {
      marginLeft: theme.spacing(6),
    },

    '&:first-child': {
      marginLeft: 0,
    },
  },
}));
