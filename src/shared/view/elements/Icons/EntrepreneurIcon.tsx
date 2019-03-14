import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function EntrepreneurIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 548 883" xmlSpace="preserve">
      <polygon fill="#5a5a5a" points="9,804 85,792 85,87 0,76 4,0 538,0 524,214 418,210 412,76 247,76 247,394 319,394 335,321 409,323 409,542 335,542 318,467 246,467 246,803 412,803 427,657 539,660 548,883 6,883 " />
    </SvgIcon>
  );
}

export default EntrepreneurIcon;
