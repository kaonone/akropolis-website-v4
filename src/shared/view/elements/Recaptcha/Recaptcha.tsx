import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { provideStyles, StylesProps } from './Recaptcha.style';

const SITE_KEY = '6Ld31qgUAAAAAKbw86QqitirAhBDVw4BP_cCVDBG';

interface IOwnProps {
  onChange(value: string): void;
}
type IProps = IOwnProps & StylesProps;

export default provideStyles(function Recaptcha(props: IProps) {
  const { onChange } = props;
  return (
    <div>
      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
});
