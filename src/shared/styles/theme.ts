import { Theme as MaterialTheme, createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './jss';

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
const colors = {
  amethystSmoke: '#A397B4',
  cornflowerBlue: '#6c81e4',
  rhino: '#283e64',
  purpleHeart: '#6931b6',
  heliotrope: '#c17bff',
  mediumPurple: '#8c4be6',
  electricViolet: '#9013FE',
  monza: '#d0021b',
  royalBlue: '#5c73e3',
  silver: '#c9c9c9',
  blackCurrant: '#2E2639',
  white: '#fff',
  black: '#000',
};

const palette = {
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
  error: {
    main: colors.monza,
  },
  link: {
    hover: colors.royalBlue,
  },
};

const unit = 8;

const baseThemeStyles = {
  palette,
  colors,
  sizes: {
    control: {
      borderRadius: 4,
    },
    maxContentWidth: 1400,
  },
  spacing: {
    unit,
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
    primaryFont: ['BrandonGrotesque', 'Arial', 'sans-serif'].join(','),
    secondaryFont: ['OpenSans', 'Arial', 'sans-serif'].join(','),
  },
  zIndex: {
    tooltip: 1500,
  },
  defaultTransitionDuration: '0.4s',
};

export const getTheme = (): Theme => {
  const extraTheme = baseThemeStyles;

  return {
    ...(createMuiTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 375,
          md: 768,
          lg: 1024,
          xl: 1920,
        },
      },
      palette,
      typography: {
        useNextVariants: true, // https://material-ui.com/style/typography/#migration-to-typography-v2
        fontFamily: extraTheme.typography.primaryFont,
      },
      shape: {
        borderRadius: extraTheme.sizes.control.borderRadius,
      },
      spacing: {
        unit: extraTheme.spacing.unit,
      },
    })),
    extra: extraTheme,
  };
};

export type Theme = MaterialTheme & { extra: typeof baseThemeStyles };
