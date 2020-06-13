import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Adaptive } from 'services/adaptability';

export function BottomWave(props: GetProps<typeof SvgIcon>) {
  return (
    <>
      <Adaptive from="mobileXS" to="tabletXS"><MobileBottom {...props}/></Adaptive>
      <Adaptive from="tabletXS"><TabletXSBottom {...props}/></Adaptive>
    </>
  );
}

function MobileBottom(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 320 209" preserveAspectRatio="none">
      <path fill="currentColor" fill-rule="evenodd" d="M0 56c53 8 105-1 154-28C204 0 259-6 320 8v201H0V56z"/>
    </SvgIcon>
  );
}

function TabletXSBottom(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 768 144" preserveAspectRatio="none">
      <path fill="currentColor" fill-rule="evenodd" d="M0 59c119 31 243 25 370-19C498-4 630-11 768 19v125H0V59z"/>
    </SvgIcon>
  );
}
