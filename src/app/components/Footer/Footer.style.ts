import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('tabletXS')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  copyright: {
    marginBottom: 30,

    [theme.breakpoints.up('tabletXS')]: {
      marginBottom: 0,
    },
  },

  nav: {
    marginBottom: 30,

    [theme.breakpoints.up('tabletXS')]: {
      marginBottom: 20,
    },

    [theme.breakpoints.up('desktopMD')]: {
      marginBottom: 12,
    },

    '& $link': {
      fontSize: 12,
      lineHeight: 'normal',
      color: theme.palette.text.primary,
      textDecoration: 'none',

      '& + $link': {
        marginLeft: 53,

        [theme.breakpoints.up('tabletXS')]: {
          marginLeft: 20,
        },

        [theme.breakpoints.up('desktopMD')]: {
          marginLeft: 50,
        },
      },
    },
  },

  text: {
    fontSize: 12,
    lineHeight: 'normal',
    opacity: 0.3,

    [theme.breakpoints.up('tabletXS')]: {
      lineHeight: '16px',
    },

    [theme.breakpoints.up('desktopMD')]: {
      lineHeight: 'normal',
    },
  },

  partners: {
    display: 'flex',

    [theme.breakpoints.up('tabletXS')]: {
      marginLeft: 32,
    },

    '& $link': {
      fontSize: 0,

      '& + $link': {
        marginLeft: 43,

        [theme.breakpoints.up('tabletXS')]: {
          marginLeft: 50,
        },
      },
    },
  },

  messari: {
    width: 101,
    height: 34,

    [theme.breakpoints.up('tabletXS')]: {
      width: 119,
      height: 40,
    },

    '& rect': {
      fill: theme.palette.type === 'light' ? '#afb7c7' : '#292835',
    },

    '& ellipse': {
      fill: theme.palette.type === 'light' ? '#b3bcce' : '#191b1f',
    },
  },

  etherium: {
    width: 136,
    height: 34,

    [theme.breakpoints.up('tabletXS')]: {
      width: 160,
      height: 40,
    },

    '& rect': {
      fill: theme.palette.type === 'light' ? '#afb7c7' : '#292835',
    },
  },

  link: {},
}));

export { useStyles };
