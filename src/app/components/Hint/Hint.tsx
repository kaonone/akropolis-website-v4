import React from 'react';
import cn from 'classnames';

import { useStyles } from './Hint.style';

export type Props = React.PropsWithChildren<{
  size?: 'small' | 'medium';
  color?: 'error' | 'default';
  renderIcon?: () => React.ReactNode;
  button?: React.ReactNode;
}>;

function Hint(props: Props) {
  const { children, renderIcon, button, size = 'medium', color = 'default' } = props;
  const classes = useStyles();

  const className = cn(classes.root, {
    [classes.isSmall]: size === 'small',
    [classes.isMedium]: size === 'medium',
    [classes.colorDefault]: color === 'default',
    [classes.colorError]: color === 'error',
    [classes.withButton]: button !== undefined,
  });

  return (
    <div className={className}>
      {children}
      {renderIcon && <div className={classes.icon}>{renderIcon()}</div>}
      {button && <div className={classes.button}>{button}</div>}
    </div>
  );
}

export { Hint };
