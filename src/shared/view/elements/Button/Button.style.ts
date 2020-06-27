import { makeStyles } from 'shared/styles';

const shadowOffset = 3;
const largeShadowOffset = 3;
const backgroundGradientSize = '300%';

const height = 2.5;
const heightTabletXS = 4.5;

const largeHeight = 4.5;
const largeHeightTabletXS = 6;

export const useStyles = makeStyles((theme) => ({
  root: {},

  gradient: {
    color: theme.extra.colors.white,
    marginBottom: 'auto',
    alignSelf: 'center',
    textTransform: 'none',
    fontWeight: 400,
    background: theme.gradients.button.linear('to right'),
    backgroundSize: backgroundGradientSize,
    lineHeight: 1,
    opacity: 0.99,

    padding: theme.spacing(0.5, 1.25),
    fontSize: theme.spacing(1.5),
    minWidth: theme.spacing(5.5),
    minHeight: theme.spacing(height),
    borderRadius: theme.spacing(height / 2),

    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(1.25, 2.25),
      fontSize: theme.spacing(2),
      minWidth: theme.spacing(8.25),
      minHeight: theme.spacing(heightTabletXS),
      borderRadius: theme.spacing(heightTabletXS / 2),
    },

    '&$sizeLarge': {
      minWidth: theme.spacing(10),
      minHeight: theme.spacing(largeHeight),
      borderRadius: theme.spacing(largeHeight / 2),
      [theme.breakpoints.up('tabletXS')]: {
        fontSize: theme.spacing(2.5),
        minHeight: theme.spacing(largeHeightTabletXS),
        borderRadius: theme.spacing(largeHeightTabletXS / 2),
      },
    },

    '&$disabled': {
      background: `rgba(0, 0, 0, 0.12)`,
    },

    '&:before': {
      // tslint:disable-next-line: quotemark
      content: "''",
      display: 'block',
      position: 'absolute',
      top: -shadowOffset,
      left: -shadowOffset,
      right: -shadowOffset,
      bottom: -shadowOffset,
      zIndex: '-1',
      background: theme.gradients.button.linear('to right'),
      backgroundSize: backgroundGradientSize,
      filter: 'blur(8px)',
      opacity: 0,
      transition: '0.5s',

      borderRadius: theme.spacing(height / 2 + 2 * shadowOffset),

      [theme.breakpoints.up('tabletXS')]: {
        borderRadius: theme.spacing(heightTabletXS / 2 + 2 * shadowOffset),
      },

      '&$sizeLarge': {
        filter: 'blur(8px)',
        top: -largeShadowOffset,
        left: -largeShadowOffset,
        right: -largeShadowOffset,
        bottom: -largeShadowOffset,
        borderRadius: theme.spacing(largeHeight / 2 + 2 * largeShadowOffset),
        [theme.breakpoints.up('tabletXS')]: {
          borderRadius: theme.spacing(largeHeightTabletXS / 2 + 2 * largeShadowOffset),
        },
      },
    },

    '&:hover, &$focusVisible': {
      animation: '$animate 8s linear infinite',

      '&:before': {
        opacity: 0.7,
        animation: '$animate 8s linear infinite',
      },
    },
  },
  sizeLarge: {},
  disabled: {},
  focusVisible: {},

  '@keyframes animate': {
    '0%': {
      backgroundPosition: '0%',
    },
    '100%': {
      backgroundPosition: backgroundGradientSize,
    },
  },
}));
