import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function ForbesIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 850 1008" xmlSpace="preserve">
      <path fill="black" d="M842 0l-842 0 0 42 44 4c34,7 57,19 72,38 14,21 23,55 25,101 17,227 17,440 0,636 -4,46 -13,80 -25,101 -15,21 -38,33 -72,38l-44 6 0 42 543 0 0 -42 -57 -4c-34,-4 -57,-19 -71,-38 -15,-21 -24,-55 -26,-101 -6,-84 -10,-181 -10,-288l113 2c61,2 104,48 125,141l42 0 0 -343 -42 0c-21,90 -61,136 -125,139l-113 2c0,-190 4,-324 10,-407l167 0c117,0 197,76 244,228l50 -15 -8 -282z" />
    </SvgIcon>
  );
}

export default ForbesIcon;
