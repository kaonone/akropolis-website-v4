import * as React from 'react';
import cn from 'classnames';

import { StylesProps, provideStyles } from './PageBlock.style';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { AnchorName } from 'shared/types/common';

type PaddingBreakpoint = 'xsVPadding' | 'smVPadding' | 'mdVPadding' | 'lgVPadding' | 'xlVPadding';

const points: PaddingBreakpoint[] = ['xsVPadding', 'smVPadding', 'mdVPadding', 'lgVPadding', 'xlVPadding'];
const paddingPointToBreakpoint: Record<PaddingBreakpoint, Breakpoint> = {
  xsVPadding: 'xs',
  smVPadding: 'sm',
  mdVPadding: 'md',
  lgVPadding: 'lg',
  xlVPadding: 'xl',
};

type BPProps = {
  [key in PaddingBreakpoint]?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

interface IProps {
  className?: string;
  children: React.ReactNode;
  anchorName?: AnchorName;
}

function PageBlock(props: BPProps & IProps & StylesProps) {
  const { classes, className, children, anchorName } = props;
  const hPaddingClasses = points
    .filter(item => Boolean(props[item]))
    .map(item => classes[`hPadding-${paddingPointToBreakpoint[item]}-${props[item]}`]);
  return (
    <div id={anchorName} className={cn(classes.root, ...hPaddingClasses, className)}>
      {children}
    </div>
  );
}

export default provideStyles(PageBlock);
