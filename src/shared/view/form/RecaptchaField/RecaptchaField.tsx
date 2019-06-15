import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { GetProps } from '_helpers';

import { Recaptcha } from 'shared/view/elements';
import { getFieldWithComponent } from 'shared/helpers/react';

type IProps = GetProps<typeof Recaptcha> & FieldRenderProps;

function RecaptchaField(props: IProps) {
  const { input } = props;

  return (
    <Recaptcha onChange={input.onChange} />
  );
}

export default getFieldWithComponent(RecaptchaField);
