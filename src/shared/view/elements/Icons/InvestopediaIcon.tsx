import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function InvestopediaIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 4887 4933" xmlSpace="preserve">
      <path fill="#E31E24" d="M2298 1731l431 273 -165 1557 2320 -1414c-154,-1226 -1197,-2147 -2433,-2147 -1353,0 -2451,1098 -2451,2451 0,214 28,427 83,633l2215 -1353zm71 2616l-431 -273 165 -1556 -1814 1107c423,804 1259,1308 2168,1308 1228,0 2267,-909 2430,-2125l-2518 1539zm562 -3186c0,-192 -155,-347 -346,-347 -192,0 -347,155 -347,347 0,191 155,346 347,346 191,0 346,-155 346,-346z" />
      <path fill="black" d="M2238 1161c0,191 155,346 347,346 191,0 346,-155 346,-346 0,-192 -155,-347 -346,-347 -192,0 -347,155 -347,347z" />
    </SvgIcon>
  );
}

export default InvestopediaIcon;
