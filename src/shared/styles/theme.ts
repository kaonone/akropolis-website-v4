import { Theme } from '@material-ui/core/styles';
import { getTheme as createTheme, makeGradient, colors } from '@akropolis-web/styles';

import { colors as localColors } from './colors';

function getGradients(type: 'dark' | 'light') {
  return {
    dca: makeGradient(
      type === 'dark'
        ? [localColors.northWesternPurple, localColors.darkPurple]
        : [localColors.blushPink2, localColors.lavender],
    ),
    dcaText: makeGradient([localColors.lilac, localColors.grape]),
  };
}

const lightPalette = {
  background: {
    default: colors.white,
  },
  type: 'light' as const,
};

export const darkPalette = {
  background: {
    default: colors.cinder,
  },
  type: 'dark' as const,
};

const extraThemeStyles = {
  sizes: {
    maxContentWidth: 1400,
    maxSubtitleWidth: 1000,
  },
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

function getTheme(type: 'light' | 'dark'): Theme {
  return createTheme(type, {
    extra: extraThemeStyles,
    colors: localColors,
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
        lg: 1023,
        xl: 1919,
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
    overrides: {
      // TODO: Remove after updating link styles in package
      MuiLink: {
        underlineHover: {
          borderWidth: '0 0 1px 0',
          borderStyle: 'solid',
          borderColor: type === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'none',
            borderColor: 'inherit',
          },
        },
      },
    },
  });
}

declare module '@akropolis-web/styles/dist/theme' {
  interface ThemeOverrides {
    extra: typeof extraThemeStyles;
    colors: typeof localColors;
    gradients: ReturnType<typeof getGradients>;
  }

  interface ThemeOptionsOverrides {
    extra: typeof extraThemeStyles;
    colors: typeof localColors;
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
