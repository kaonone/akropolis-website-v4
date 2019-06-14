import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { provideStyles, StylesProps } from './Recaptcha.style';
import { RECAPTCHA_SITE_KEY } from 'core/constants';

interface IOwnProps {
  onChange(value: string): void;
}
type IProps = IOwnProps & StylesProps;

export default provideStyles(function Recaptcha(props: IProps) {
  const { onChange } = props;
  return (
    <div>
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
});
