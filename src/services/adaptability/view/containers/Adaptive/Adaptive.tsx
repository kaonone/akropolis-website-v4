import * as React from 'react';
import cn from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import { useTheme, makeStyles, Theme } from 'shared/styles';

import { useAdaptabilityContext } from 'services/adaptability/AdaptabilityContext';

interface IProps {
  from?: Breakpoint | number;
  to?: Breakpoint | number;
  className?: string;
  children: React.ReactNode;
}

function isUndefined<T>(value: T | undefined): value is undefined {
  return typeof value === 'undefined';
}

function Adaptive(props: IProps) {
  const { from, to, className, children } = props;
  const theme = useTheme();
  const { hydrated } = useAdaptabilityContext();

  const fromQuery = !isUndefined(from) && theme.breakpoints.up(from);
  const toQuery = !isUndefined(to) && down(to, theme);
  const betweenQuery = !isUndefined(from) && !isUndefined(to) && between(from, to, theme);
  const query = betweenQuery || fromQuery || toQuery;

  React.useDebugValue({
    from,
    to,
    fromQuery,
    toQuery,
    betweenQuery,
  });

  const useStyles = React.useMemo(
    () =>
      makeStyles({
        root: {
          display: 'none',
          [query || '&']: {
            display: 'unset',
          },
        },
      }),
    [query],
  );
  const classes = useStyles();

  const matched = useMediaQuery(query || '');
  const isServer = window.__PRERENDER_INJECTED__ ? window.__PRERENDER_INJECTED__.isServer : false;

  const wrappedChildren = (
    <div className={cn(hydrated ? classes.root : undefined, className)}>{children}</div>
  );

  return isServer || !query || !hydrated || matched ? wrappedChildren : null;
}

function down(key: Breakpoint | number, theme: Theme) {
  const maxBreakpoint: Breakpoint = Object.entries(theme.breakpoints.values).reduce((acc, cur) =>
    acc[1] > cur[1] ? cur : acc,
  )[0] as Breakpoint;

  if (key === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up('xs');
  }

  const value = typeof key === 'number' ? key : theme.breakpoints.values[key];

  return `@media (max-width:${value - 5 / 100}px)`;
}

function between(start: Breakpoint | number, end: Breakpoint | number, theme: Theme) {
  const maxBreakpoint: Breakpoint = Object.entries(theme.breakpoints.values).reduce((acc, cur) =>
    acc[1] > cur[1] ? cur : acc,
  )[0] as Breakpoint;

  if (end === maxBreakpoint) {
    // maxBreakpoint down applies to all sizes
    return theme.breakpoints.up(start);
  }

  const startValue = typeof start === 'number' ? start : theme.breakpoints.values[start];
  const endValue = typeof end === 'number' ? end : theme.breakpoints.values[end];

  return `@media (min-width:${startValue}px) and (max-width:${endValue - 5 / 100}px)`;
}

export { IProps };
export default Adaptive;
