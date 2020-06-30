import * as React from 'react';
import cn from 'classnames';
import { SubSet } from '_helpers';
import MuiButton, { ButtonTypeMap as MuiButtonTypeMap } from '@material-ui/core/Button';

import { useStyles } from './Button.style';
import { OverridableComponent, OverrideProps } from '@material-ui/core/OverridableComponent';

const muiColors = ['primary', 'default', 'secondary', 'inherit'] as const;
type MuiColor = SubSet<MuiButtonTypeMap['props']['color'], typeof muiColors[number]>;

type ButtonClassKey = keyof ReturnType<typeof useStyles>;

interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P &
    Omit<MuiButtonTypeMap['props'], 'classes' | 'color'> & {
      color: 'gradient' | MuiColor;
    };
  defaultComponent: D;
  classKey: ButtonClassKey;
}

export type ButtonProps<D extends React.ElementType = ButtonTypeMap['defaultComponent'], P = {}> = OverrideProps<
  ButtonTypeMap<P, D>,
  D
>;

const Button: OverridableComponent<ButtonTypeMap> = function ButtonFunc<P = {}, D extends React.ElementType = 'button'>(
  props: ButtonProps<D, P>,
) {
  const classes = useStyles();
  const { color, className, ...rest } = props;

  const buttonColor = color && muiColors.includes(color as MuiColor) ? (color as MuiColor) : undefined;
  return (
    <MuiButton
      {...rest}
      classes={{
        root: cn(classes.root, className, { [classes.colorGradient]: color === 'gradient' }),
        disabled: classes.disabled,
        sizeLarge: classes.sizeLarge,
        sizeSmall: classes.sizeSmall,
        focusVisible: classes.focusVisible,
        outlined: classes.outlined,
        contained: classes.contained,
        ...rest.classes,
      }}
      color={buttonColor}
    />
  );
};

export default Button;
