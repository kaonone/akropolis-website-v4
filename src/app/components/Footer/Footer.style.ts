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
  },

  text: {
    fontSize: 10,
    lineHeight: 1.6,

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 12,
      lineHeight: 1.33,
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
  },

  partnerLink: {
    '& + $partnerLink': {
      marginLeft: 43,

      [theme.breakpoints.up('tabletXS')]: {
        marginLeft: 50,
      },
    },
  },

  partnerIcon: {
    fontSize: 34,

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 40,
    },
  },

  link: {
    fontSize: 10,

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 12,
    },

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
}));

export { useStyles };
