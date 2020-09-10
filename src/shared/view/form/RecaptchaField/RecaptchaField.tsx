import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Recaptcha } from 'shared/view/elements';
import { wrapComponentIntoFormField } from 'shared/helpers/react';

type Props = Omit<React.ComponentProps<typeof Recaptcha>, 'ref'> & FieldRenderProps<any, HTMLElement>;

function RecaptchaFieldComponent(props: Props) {
  const { input } = props;

  return <Recaptcha onChange={input.onChange} />;
}

export const RecaptchaField = wrapComponentIntoFormField(RecaptchaFieldComponent);
