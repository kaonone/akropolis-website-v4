import { Theme as MaterialTheme, createMuiTheme } from '@material-ui/core/styles';
import { PaletteColor } from '@material-ui/core/styles/createPalette';
import { Theme } from './jss';

type PaletteTypes = 'primary' | 'error'; // TODO: add 'secondary' palette type if you need secondary color

// Find color name http://chir.ag/projects/name-that-color
// https://github.com/insomnious0x01/ntc-js
const colors = {
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

const darkBlueThemePalette: Record<PaletteTypes, PaletteColor> = {
  primary: {
    main: colors.biscay,
    light: colors.dodgerBlue,
    dark: colors.downriver,
    contrastText: colors.white,
  },
  error: {
    main: colors.redRibbon,
    light: colors.corn,
    dark: colors.redRibbon,
    contrastText: colors.redRibbon,
  },
};

const blueThemePalette: Record<PaletteTypes, PaletteColor> = {
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
};

const themePalettesMap = {
  blue: blueThemePalette,
  darkBlue: darkBlueThemePalette,
};

const baseThemeStyles = {
  colors,
  sizes: {
    control: {
      borderRadius: 4,
    },
  },
  spacing: {
    unit: 8,
  },
  typography: {
    primaryFont: ['OpenSans', 'Arial', 'sans-serif'].join(','),
  },
  zIndex: {
    tooltip: 1500,
  },
  defaultTransitionDuration: '0.4s',
};

const extraThemeFactory = () => ({
  palette: themePalettesMap.blue,
  ...baseThemeStyles,
});

export const getTheme = (): Theme => {
  const extraTheme = extraThemeFactory();

  return {
    ...(createMuiTheme({
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

export type Theme = MaterialTheme & { extra: ReturnType<typeof extraThemeFactory> };
