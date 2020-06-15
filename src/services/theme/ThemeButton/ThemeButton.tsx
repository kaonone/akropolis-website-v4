import React, { useCallback } from 'react';
import cn from 'classnames';

import { ButtonBase } from 'shared/view/elements';
import { Sun, Moon } from 'shared/view/elements/Icons';
import { useThemeContext } from '../ThemeContext';
import { useStyles } from './ThemeButton.style';

interface Props {
  size?: 'small' | 'medium';
}

export function ThemeButton({ size }: Props) {
  const { changeTheme, currentTheme } = useThemeContext();
  const classes = useStyles();

  const handleClick = useCallback(() => {
    changeTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [changeTheme, currentTheme]);

  return (
    <ButtonBase
      focusRipple
      className={cn(classes.root, { [classes.sizeSmall]: size === 'small' })}
      focusVisibleClassName={classes.focusVisible}
      onClick={handleClick}
    >
      <span className={classes.backdrop} />
      <div className={classes.icons}>
        <Sun className={classes.icon} />
        <Moon className={classes.icon} />
      </div>
    </ButtonBase>
  );
}
