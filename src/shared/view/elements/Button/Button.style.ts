import { makeStyles } from 'shared/styles';

const shadowOffset = 3;
const largeShadowOffset = 3;
const backgroundGradientSize = '300%';

const smallHeight = 2;
const smallHeightTabletXS = 3.5;

const height = 2.5;
const heightTabletXS = 4.5;

const largeHeight = 4.5;
const largeHeightTabletXS = 6;

export const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: 400,
    lineHeight: 1,

    padding: theme.spacing(0.5, 2),
    fontSize: theme.spacing(1.5),
    minWidth: theme.spacing(5.5),
    minHeight: theme.spacing(height),
    borderRadius: theme.spacing(height / 2),

    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(1.25, 4),
      fontSize: theme.spacing(2),
      minWidth: theme.spacing(8.25),
      minHeight: theme.spacing(heightTabletXS),
      borderRadius: theme.spacing(heightTabletXS / 2),
    },

    '&$sizeSmall': {
      padding: theme.spacing(0.25, 1),
      fontSize: theme.spacing(1.25),
      minWidth: theme.spacing(4),
      minHeight: theme.spacing(smallHeight),
      borderRadius: theme.spacing(smallHeight / 2),
      [theme.breakpoints.up('tabletXS')]: {
        padding: theme.spacing(0.5, 2),
        fontSize: theme.spacing(2),
        minHeight: theme.spacing(smallHeightTabletXS),
        borderRadius: theme.spacing(smallHeightTabletXS / 2),
      },
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

    '&$colorGradient': {
      boxShadow: 'none',

      '&$outlined': {
        borderWidth: 0,
        zIndex: 1,
        position: 'relative',
        backgroundImage: theme.gradients.main.linear('to right'),

        '&:before': {
          zIndex: -1,
          display: 'block',
          // tslint:disable-next-line: quotemark
          content: "''",
          position: 'absolute',
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          backgroundColor: theme.palette.type === 'light' ? theme.colors.athensGray : theme.colors.obsidian,
          transition: theme.transitions.create(['opacity', 'background-color']),

          borderRadius: theme.spacing(height / 2) - 1,
          [theme.breakpoints.up('tabletXS')]: {
            borderRadius: theme.spacing(heightTabletXS / 2) - 1,
          },

          '$sizeSmall&': {
            borderRadius: theme.spacing(smallHeight / 2) - 1,
            [theme.breakpoints.up('tabletXS')]: {
              borderRadius: theme.spacing(smallHeightTabletXS / 2) - 1,
            },
          },

          '$sizeLarge&': {
            borderRadius: theme.spacing(largeHeight / 2) - 1,
            [theme.breakpoints.up('tabletXS')]: {
              borderRadius: theme.spacing(largeHeightTabletXS / 2) - 1,
            },
          },
        },

        '&:hover, &$focusVisible': {
          color: theme.colors.royalBlue2,
        },
      },

      '&$contained': {
        color: theme.colors.white,
        marginBottom: 'auto',
        alignSelf: 'center',
        background: theme.gradients.button.linear('to right'),
        backgroundSize: backgroundGradientSize,
        opacity: 0.99,

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
    },
  },

  colorGradient: {},
  outlined: {},
  contained: {},
  sizeSmall: {},
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
