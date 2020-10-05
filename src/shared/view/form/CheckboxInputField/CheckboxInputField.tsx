import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { CheckboxInput } from 'shared/view/elements/inputs';
import { wrapComponentIntoFormField } from 'shared/helpers/react';

type Props = Omit<React.ComponentProps<typeof CheckboxInput>, 'ref'> & FieldRenderProps<any, HTMLElement>;

function CheckboxInputFieldComponent(props: Props) {
  const { input, meta, ...rest } = props;
  const { type: inputType, ...restInput } = input;

  const error = typeof rest.error === 'boolean' ? rest.error && meta.error : meta.touched && meta.error;
  const value = typeof input.value === 'boolean' ? undefined : input.value;
  return <CheckboxInput {...rest} helperText={error} error={Boolean(error)} {...restInput} value={value} />;
}

export const CheckboxInputField = wrapComponentIntoFormField(CheckboxInputFieldComponent, 'checkbox');
