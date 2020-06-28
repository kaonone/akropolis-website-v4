import { Theme, createMuiTheme } from '@material-ui/core/styles';
import { makeGradient } from './makeGradient';

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
const colors = {
  amethystSmoke: '#A397B4',
  cornflowerBlue: '#6c81e4',
  rhino: '#283e64',
  purpleHeart: '#6931b6',
  mediumPurple: '#8c4be6',
  electricViolet: '#9013FE',
  monza: '#d0021b',
  silver: '#c9c9c9',
  blackCurrant: '#2E2639',
  white: '#fff',
  black: '#000',
  royalPurple: '#613AAF',
  woodSmoke: '#181b1f',

  charade: '#292835',
  shark: '#191b1f',
  athensGray: '#eff1f5',
  royalBlue: '#544CF2',
  royalBlue2: '#594cf2',
  heliotrope: '#D93CEF',
  heliotrope2: '#E965FF',
  zumthor: '#eaf1ff',
  scarpaFlow: '#555466',
  scarpaFlow2: '#5a5466',
  titanWhite: '#efedff',
  foam: '#f0fafe',
  comet: '#616884',
  alto: '#D8D8D8',
  jacarta: '#342c66',
  jacarta2: '#422c66',
  blueZodiac: '#13254a',
  bunting: '#1d134a',
  bossanova: '#4d2c66',
  valhalla: '#2a134a',
  zumthor2: '#e6eeff',
  linkWater: '#d6eaf3',
  whisper: '#e9e7f2',
  blueChalk: '#e7e3fe',
  snuff: '#f0ddf1',
  amour: '#f8e6f2',
  anakiwa: '#7cd7ff',
  melrose: '#a38cff',
  blushPink: '#ff79ff',
  heliotrope3: '#d93cef',
};

function getGradients(type: 'dark' | 'light') {
  return {
    main: makeGradient([colors.heliotrope, colors.royalBlue]),
    products: [
      makeGradient(type === 'dark' ? [colors.jacarta, colors.blueZodiac] : [colors.zumthor2, colors.linkWater]),
      makeGradient(type === 'dark' ? [colors.jacarta2, colors.bunting] : [colors.whisper, colors.blueChalk]),
      makeGradient(type === 'dark' ? [colors.bossanova, colors.valhalla] : [colors.snuff, colors.amour]),
    ] as const,
    button: makeGradient([colors.heliotrope, colors.royalBlue, colors.heliotrope2, colors.heliotrope]),
  };
}

const lightPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet,
  },
  text: {
    primary: colors.black,
  },
  error: {
    main: colors.monza,
  },
  background: {
    default: colors.white,
  },
  type: 'light' as const,
};

export const darkPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet,
  },
  text: {
    primary: colors.white,
  },
  error: {
    main: colors.monza,
  },
  background: {
    default: colors.charade,
  },
  type: 'dark' as const,
};

const unit = 8;

const baseThemeStyles = {
  palette: lightPalette,
  colors,
  gradients: getGradients('light'),
  sizes: {
    control: {
      borderRadius: 4,
    },
    maxContentWidth: 1400,
    maxSubtitleWidth: 1000,
  },
  spacing: {
    unit,
    layoutContentSkew: {
      xsHeight: unit * 3,
      lgHeight: unit * 4,
    },
    headerHeight: {
      xs: 80,
      md: 96,
      lg: 112,
    },
    horizontalPagePaddings: {
      xs: {
        small: unit,
        medium: unit * 2,
        large: unit * 3,
      },
      md: {
        small: unit * 1.5,
        medium: unit * 4,
        large: unit * 10.5,
      },
      lg: {
        small: unit * 1.5,
        medium: unit * 8.5,
        large: unit * 12,
      },
    },
  },
  typography: {
    primaryFont: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    secondaryFont: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','), // TODO remove
  },
  zIndex: {
    tooltip: 1500,
  },
  defaultTransitionDuration: '0.4s',
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

function getTheme(type: 'light' | 'dark'): Theme {
  return createMuiTheme({
    extra: baseThemeStyles,
    colors,
    gradients: getGradients(type),
    palette: type === 'light' ? lightPalette : darkPalette,
    breakpoints: {
      keys: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'desktopXL',
        'desktopLG',
        'desktopMD',
        'desktopSM',
        'desktopXS',
        'tabletSM',
        'tabletXS',
        'mobileSM',
        'mobileXS',
      ],
      values: {
        xs: 0,
        sm: 375,
        md: 767,
        lg: 1024,
        xl: 1920,
        desktopXL: 2560,
        desktopLG: 1920,
        desktopMD: 1440,
        desktopSM: 1360,
        desktopXS: 1280,
        tabletSM: 1024,
        tabletXS: 768,
        mobileSM: 414,
        mobileXS: 0,
      },
    },
    typography: {
      fontFamily: baseThemeStyles.typography.primaryFont,
    },
    shape: {
      borderRadius: baseThemeStyles.sizes.control.borderRadius,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: 16,
            fontFamily: baseThemeStyles.typography.primaryFont,
          },
          body: {
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          'html, body, #root': {
            height: '100%',
          },
          '*': {
            boxSizing: 'border-box',
          },
        },
      },
      MuiDrawer: {
        paper: {
          width: '26.875rem',
          maxWidth: '100vw',
          backgroundColor: colors.blackCurrant,
        },
      },
      MuiSnackbarContent: {
        root: {
          backgroundColor: '#fff',
        },
        message: {
          color: colors.rhino,
        },
      },
      MuiFormControlLabel: {
        root: {
          marginRight: 0,
        },
      },
    },
  });
}

export { Theme };

// tslint:disable: interface-name
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    extra: typeof baseThemeStyles;
    colors: typeof colors;
    gradients: ReturnType<typeof getGradients>;
  }

  interface ThemeOptions {
    extra: typeof baseThemeStyles;
    colors: typeof colors;
    gradients: ReturnType<typeof getGradients>;
  }
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    desktopXL: true;
    desktopLG: true;
    desktopMD: true;
    desktopSM: true;
    desktopXS: true;
    tabletSM: true;
    tabletXS: true;
    mobileSM: true;
    mobileXS: true;
  }
}
