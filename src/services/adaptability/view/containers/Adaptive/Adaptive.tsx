import * as React from 'react';
// import cn from 'classnames';
import { connect } from 'react-redux';
// import MediaQuery from 'react-responsive';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Breakpoint, Breakpoints } from '@material-ui/core/styles/createBreakpoints';

import { IAppReduxState } from 'shared/types/app';

import * as selectors from './../../../redux/selectors';
import { StylesProps, provideStyles } from './Adaptive.style';

interface IOwnProps {
  from?: Breakpoint | number;
  to?: Breakpoint | number;
  className?: string;
  children: React.ReactNode;
}

interface IStateProps {
  hydrated: boolean;
}

type IProps = IStateProps & IOwnProps & StylesProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    hydrated: selectors.selectHydrated(state),
  };
}

// TODO ds: remove react-responsive, after react-hooks release https://material-ui.com/layout/use-media-query/

function Adaptive(props: IProps) {
  const { theme, from = '', to = '', className, children } = props;

  const fromQuery = theme && from && up(from, theme.breakpoints).split(' ')[1];
  const toQuery = theme && to && down(to, theme.breakpoints).split(' ')[1];
  const query = [fromQuery, toQuery].filter(Boolean).join(' and ');

  const matched = useMediaQuery(query);

  const wrappedChildren = <div className={className}>{children}</div>;

  return matched ? wrappedChildren : null;
}

const unit = 'px';
const step = 5;

function up(key: Breakpoint | number, breakpoints: Breakpoints) {
  const value = typeof key === 'number' ? key : breakpoints.values[key];
  return `@media (min-width:${value}${unit})`;
}

function down(key: Breakpoint | number, breakpoints: Breakpoints): string {
  const endIndex = breakpoints.keys.indexOf(key as Breakpoint);
  const upperbound = breakpoints.values[breakpoints.keys[endIndex]];

  const value = typeof upperbound === 'number' && endIndex >= 0 ? upperbound : key;

  if (typeof value === 'number') {
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  return value;
}

export { IProps };
export default (
  connect(mapState)(
    provideStyles(Adaptive),
  )
);
