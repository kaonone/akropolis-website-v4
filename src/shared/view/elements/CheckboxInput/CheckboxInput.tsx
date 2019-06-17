import React from 'react';
import { CheckIdentity } from '_helpers';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';

type IProps = CheckboxProps & Pick<FormControlProps, 'error' | 'required' | 'fullWidth'> & {
  label: React.ReactNode;
  helperText?: string;
  formHelperTextProps?: FormHelperTextProps;
  labelClasses?: FormControlLabelProps['classes'];
};

interface INormalizedProps {
  checkboxProps: CheckboxProps;
  formControlProps: FormControlProps;
  formHelperTextProps: FormHelperTextProps | null;
  other: {
    label: React.ReactNode | null;
    helperText: string | null;
  };
  labelClasses: IProps['labelClasses'];
}

function CheckboxInput(props: IProps) {
  const { formControlProps, formHelperTextProps, checkboxProps, other, labelClasses } = normalizeProps(props);
  const { label, helperText } = other;

  return (
    <FormControl {...formControlProps}>
      <FormControlLabel
        control={<Checkbox {...checkboxProps} />}
        label={label + (checkboxProps.required ? ' *' : '')}
        classes={{ ...labelClasses }}
      />
      {helperText && <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
}

function normalizeProps(props: IProps): INormalizedProps {
  const {
    error, helperText = null, label, formHelperTextProps = null, fullWidth, labelClasses,
    ...rest } = props;

  const checkboxProps: CheckIdentity<CheckboxProps, typeof rest> = rest;
  const formControlProps: FormControlProps = { error, required: rest.required, fullWidth };

  return {
    formHelperTextProps,
    formControlProps,
    checkboxProps,
    labelClasses,
    other: { label, helperText },
  };
}

export default CheckboxInput;
