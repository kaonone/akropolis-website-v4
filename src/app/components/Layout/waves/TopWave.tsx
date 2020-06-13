import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Adaptive } from 'services/adaptability';

export function TopWave(props: GetProps<typeof SvgIcon>) {
  return (
    <>
      <Adaptive from="mobileXS" to="tabletXS"><MobileTop {...props}/></Adaptive>
      <Adaptive from="tabletXS" to="tabletSM"><TabletXSTop {...props}/></Adaptive>
      <Adaptive from="tabletSM"><TabletSMTop {...props}/></Adaptive>
    </>
  );
}

function MobileTop(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 320 415" preserveAspectRatio="none">
      <path fill="currentColor" fill-rule="evenodd" d="M0 0h320v368c-35 25-85 33-152 24-73-10-129-2-168 23V0z" />
    </SvgIcon>
  );
}

function TabletXSTop(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 768 616" preserveAspectRatio="none">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M0 0h768v282c-49 28-111 43-185 45-103 2-193 23-254 149C268 600 159 642 0 601V0z"
      />
    </SvgIcon>
  );
}

function TabletSMTop(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 1024 630" preserveAspectRatio="none">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M0 0h1024v362c-69 33-158 27-269-20-157-67-262 51-318 144a316 316 0 0 1-245 141c-72 7-136-5-192-36V0z"
      />
    </SvgIcon>
  );
}
