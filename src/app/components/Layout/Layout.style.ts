import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.desktopXL,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },

  container: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('tabletSM')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up('desktopXS')]: {
      paddingLeft: theme.spacing(14),
      paddingRight: theme.spacing(14),
    },
    [theme.breakpoints.up('desktopMD')]: {
      paddingLeft: theme.spacing(18),
      paddingRight: theme.spacing(18),
    },
    [theme.breakpoints.up('desktopLG')]: {
      paddingLeft: theme.spacing(30),
      paddingRight: theme.spacing(30),
    },
    [theme.breakpoints.up('desktopXL')]: {
      paddingLeft: theme.spacing(37),
      paddingRight: theme.spacing(37),
    },
  },

  header: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(3.5),
    [theme.breakpoints.up('tabletXS')]: {
      paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.up('tabletSM')]: {
      paddingTop: theme.spacing(5),
    },
  },

  footer: {
    marginTop: 'auto',

    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('tabletXS')]: {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('desktopXS')]: {
      paddingBottom: theme.spacing(3),
    },
  },

  waveContainer: {
    position: 'relative',

    '&$top': {
      paddingBottom: theme.spacing(7),
      [theme.breakpoints.up('tabletXS')]: {
        paddingBottom: theme.spacing(10),
      },
      [theme.breakpoints.up('tabletSM')]: {
        paddingBottom: theme.spacing(13),
      },
      [theme.breakpoints.up('desktopXS')]: {
        paddingBottom: theme.spacing(14),
      },
    },

    '&$bottom': {
      marginTop: 'auto',

      paddingTop: theme.spacing(10),
      [theme.breakpoints.up('tabletXS')]: {
        paddingTop: theme.spacing(12),
      },
      [theme.breakpoints.up('desktopXS')]: {
        paddingTop: theme.spacing(13),
      },
    },
  },

  wave: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    color: theme.palette.type === 'light' ? theme.colors.athensGray : theme.colors.shark,
  },

  top: {},
  bottom: {},

  socials: {
    position: 'fixed',
    display: 'none',
    marginRight: theme.spacing(2),
    top: '13%',
    right: 0,

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },

  isAbsolute: {},
}));
