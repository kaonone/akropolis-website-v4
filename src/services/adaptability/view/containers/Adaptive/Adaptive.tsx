import * as React from 'react';
import { connect } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Breakpoint, Breakpoints } from '@material-ui/core/styles/createBreakpoints';

import { IAppReduxState } from 'shared/types/app';
import { useTheme } from 'shared/styles';

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

function Adaptive(props: IProps) {
  const { from = '', to = '', className, children } = props;
  const theme = useTheme();

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
  const value = typeof key === 'number' ? key : breakpoints.values[key];
  return `@media (max-width:${value - step / 100}${unit})`;
}

export { IProps };
export default connect(mapState)(provideStyles(Adaptive));
