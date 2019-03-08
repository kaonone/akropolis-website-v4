import { Theme as MaterialTheme, createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './jss';

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
const colors = {
  royalBlue: '#5c73e3',
  dodgerBlue: '#2376F5',
  governorBay: '#3631B6',
  anakiwa: '#7BDEFF',
  redRibbon: '#E90C14',
  biscay: '#202B72',
  downriver: '#0F195B',
  sail: '#BBDEFB',
  corn: '#F7BA08',
  gallery: '#ECEAEA',
  silver: '#c9c9c9',
  codGray: '#1e1e1e',
  white: '#fff',
  black: '#000',
};

const palette = {
  primary: {
    main: colors.dodgerBlue,
    light: colors.anakiwa,
    dark: colors.governorBay,
    contrastText: colors.white,
  },
  error: {
    main: colors.redRibbon,
    light: colors.corn,
    dark: colors.redRibbon,
    contrastText: colors.redRibbon,
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
      palette: {
        primary: {
          main: extraTheme.palette.primary.main,
          light: extraTheme.palette.primary.light,
          dark: extraTheme.palette.primary.dark,
          contrastText: extraTheme.palette.primary.contrastText,
        },
        error: {
          main: extraTheme.palette.error.main,
        },
      },
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
