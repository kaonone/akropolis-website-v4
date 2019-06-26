import * as React from 'react';
import cn from 'classnames';
import { SubSet, MergeRight } from '_helpers';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

import { StylesProps, provideStyles } from './Button.style';

type MuiColor = 'primary' | 'default' | 'secondary';
const muiColors: MuiColor[] = ['primary', 'default', 'secondary'];

type IProps = StylesProps & MergeRight<ButtonProps, {
  color?: SubSet<ButtonProps['color'], MuiColor> | 'gradient';
}>;

function Button(props: IProps) {
  const { classes, color, className, ...rest } = props;

  const buttonColor = color && muiColors.includes(color as MuiColor) ? color as MuiColor : undefined;
  return (
    <MuiButton
      {...rest}
      classes={{
        root: cn(classes.root, className, { [classes.gradient]: color === 'gradient' }),
        disabled: classes.disabled,
      }}
      color={buttonColor}
    />
  );
}

export default provideStyles(Button);
