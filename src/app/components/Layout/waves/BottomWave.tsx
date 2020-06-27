import * as React from 'react';
import cn from 'classnames';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Adaptive } from 'services/adaptability';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    display: 'block',
  },
  mobile: {
    height: 209,
  },
  tabletXS: {
    height: 144,
  },
});

export function BottomWave({ className, ...props }: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <>
      <Adaptive from="mobileXS" to="tabletXS">
        <MobileBottom {...props} className={cn(className, classes.root, classes.mobile)} />
      </Adaptive>
      <Adaptive from="tabletXS">
        <TabletXSBottom {...props} className={cn(className, classes.root, classes.tabletXS)} />
      </Adaptive>
    </>
  );
}

function MobileBottom(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 320 209" preserveAspectRatio="none">
      <path fill="currentColor" fillRule="evenodd" d="M0 56c53 8 105-1 154-28C204 0 259-6 320 8v201H0V56z" />
    </SvgIcon>
  );
}

function TabletXSBottom(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 768 144" preserveAspectRatio="none">
      <path fill="currentColor" fillRule="evenodd" d="M0 59c119 31 243 25 370-19C498-4 630-11 768 19v125H0V59z" />
    </SvgIcon>
  );
}
