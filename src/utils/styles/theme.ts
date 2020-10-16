/* tslint:disable:no-empty-interface */
import { createMuiTheme } from '@material-ui/core/styles';
import { ZIndex as MUIZIndex } from '@material-ui/core/styles/zIndex';
import { getTheme as createTheme, makeGradient, Theme, colors } from '@akropolis-web/styles';
import { Object as O } from 'ts-toolbelt';

import { colors as localColors } from './colors';

const defaultTheme = createMuiTheme();

function getGradients(type: 'dark' | 'light') {
  return {
    landingIcon: makeGradient(
      type === 'dark'
        ? [localColors.northWesternPurple, colors.valhalla]
        : [localColors.blushPink2, localColors.lavender],
    ),
    landingText: makeGradient([localColors.lilac2, localColors.grape]),
    poolBalanceChart: [
      makeGradient(['#fc87e2', '#f24cb6']),
      makeGradient(['#63afdd', '#574cf2']),
    ] as const,
    additionalChartColors: [
      makeGradient(['#A88BEB', '#F8CEEC']),
      makeGradient(['#647DEE', '#7F53AC']),
      makeGradient(['#F53844', '#42378F']),
      makeGradient(['#0652C5', '#D4418E']),
      makeGradient(['#B621FE', '#1FD1F9']),
      makeGradient(['#5F72BE', '#9921E8']),
      makeGradient(['#05D6D9', '#F907FC']),
      makeGradient(['#AD1DEB', '#6E72FC']),
      makeGradient(['#E975A8', '#726CF8']),
      makeGradient(['#A1BAFE', '#8D5185']),
      makeGradient(['#AA4465', '#861657']),
      makeGradient(['#000000', '#923CB5']),
      makeGradient(['#000000', '#E056FD']),
      makeGradient(['#746CC0', '#58427C']),
      makeGradient(['#8241B8', '#6C33A3']),
      makeGradient(['#EE696B', '#523A78']),
      makeGradient(['#A594F9', '#6247AA']),
    ],
  };
}

const sizes = {
  chartWidth: {
    default: 135,
    us: 30,
    xs: 50,
    sm: 85,
    md: 114,
    lg: 140,
    xl: 170,
  },
};

const zIndex = {
  ...defaultTheme.zIndex,
  pageContentMobile: defaultTheme.zIndex.modal - 40,
  pageHeader: defaultTheme.zIndex.modal - 20,
  sidebarBackdrop: defaultTheme.zIndex.modal,
  sidebarTemporary: defaultTheme.zIndex.modal + 20,
  allocateFormFixed: defaultTheme.zIndex.modal + 20,
  header: defaultTheme.zIndex.modal + 60,
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

function getTheme(type: 'light' | 'dark'): Theme {
  return createTheme(type, {
    sizes,
    zIndex,
    colors: localColors,
    gradients: getGradients(type),
  });
}

declare module '@akropolis-web/styles/dist/theme' {
  interface ThemeOverrides {
    sizes: typeof sizes;
    // colors: typeof localColors;
    gradients: ReturnType<typeof getGradients>;
    zIndex: typeof zIndex;
  }

  interface ThemeOptionsOverrides {
    sizes: typeof sizes;
    // colors: typeof localColors;
    gradients: ReturnType<typeof getGradients>;
    zIndex: typeof zIndex;
  }
}

declare module '@material-ui/core/styles/zIndex' {
  interface ZIndexOverrides extends MUIZIndex {
    sidebarTemporary: number;
    sidebarBackdrop: number;
    allocateFormFixed: number;
    header: number;
    pageHeader: number;
    pageContentMobile: number;
  }

  interface ZIndex extends O.Merge<{}, ZIndexOverrides, 'deep'> {}
}
