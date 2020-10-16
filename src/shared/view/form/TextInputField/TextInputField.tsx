import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { TextInput } from 'shared/view/elements';
import { wrapComponentIntoFormField } from 'shared/helpers/react';

type Props = Omit<React.ComponentProps<typeof TextInput>, 'ref'> & FieldRenderProps<any, HTMLElement>;

function TextInputFieldComponent(props: Props) {
  const { input, meta, ...rest } = props;
  const error = typeof rest.error === 'boolean' ? rest.error && meta.error : meta.touched && meta.error;
  return <TextInput {...rest} helperText={error} error={Boolean(error)} {...input} />;
}

export const TextInputField = wrapComponentIntoFormField(TextInputFieldComponent);
