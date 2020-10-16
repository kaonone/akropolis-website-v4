import { makeStyles, lighten, rgba, getAdaptiveFontSize } from 'utils/styles';

export const useStyles = makeStyles(
  theme => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.25rem',
        textAlign: 'center',
        transition: theme.transitions.create('background-color'),

        '&$isSmall': {
          padding: theme.spacing(0.5, 1.5),
          minHeight: theme.spacing(4),
        },

        '&$isMedium': {
          padding: theme.spacing(1.5, 3),
          minHeight: theme.spacing(6),
        },

        '&$colorDefault': {
          color: theme.palette.text.secondary,
          backgroundColor: rgba(theme.palette.background.hint, 0.5),
        },

        '&$colorError': {
          color: theme.palette.error.main,
          ...getAdaptiveFontSize(theme),
          backgroundColor: lighten(theme.palette.error.main, 0.8),
        },

        '&$withButton': {
          justifyContent: 'space-between',
          textAlign: 'left',
        },
      },

      icon: {
        marginLeft: 10,
      },

      button: {
        marginLeft: 10,
      },

      isSmall: {},
      isMedium: {},

      colorDefault: {},
      colorError: {},

      withButton: {},
    };
  },
  { name: 'Hint' },
);
