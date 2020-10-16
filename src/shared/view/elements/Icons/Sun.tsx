// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useTheme } from 'shared/styles';
import { MainSvgGradient } from './MainSvgGradient';

export function Sun(props: GetProps<typeof SvgIcon>) {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" preserveAspectRatio="none">
      <defs>
        <MainSvgGradient />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill={theme.palette.type === 'light' ? `url(#${MainSvgGradient.ID})` : 'currentColor'}
          d="M12.09 6.9a.7.7 0 0 0 .68-.68V4.68a.7.7 0 0 0-.68-.68.7.7 0 0 0-.68.68v1.54c0 .37.3.68.68.68zm4.63 1.54l1.1-1.1a.69.69 0 0 0-.01-.96.67.67 0 0 0-.96 0l-1.1 1.1a.68.68 0 1 0 .97.96zm-8.31 0a.7.7 0 0 0 0-.96l-1.08-1.1a.68.68 0 0 0-.96 0 .69.69 0 0 0-.01.96l1.08 1.1c.26.26.7.26.97 0zm3.67 7.47a3.83 3.83 0 0 0 3.81-3.8 3.84 3.84 0 0 0-3.81-3.82 3.84 3.84 0 0 0-3.8 3.81c0 2.1 1.72 3.81 3.8 3.81zm0-1.22a2.61 2.61 0 0 1-2.6-2.59c0-1.41 1.18-2.6 2.6-2.6 1.42 0 2.6 1.19 2.6 2.6a2.6 2.6 0 0 1-2.6 2.6zm7.4-1.9c.37 0 .68-.32.68-.69a.7.7 0 0 0-.68-.68h-1.52a.7.7 0 0 0-.69.68c0 .37.32.68.7.68h1.51zm-13.27 0a.7.7 0 0 0 .68-.69.7.7 0 0 0-.68-.68H4.68a.7.7 0 0 0-.68.68c0 .37.31.68.68.68h1.53zm11.6 5.04a.7.7 0 0 0 0-.96l-1.1-1.09a.67.67 0 0 0-.95 0 .67.67 0 0 0 0 .95l1.1 1.1c.26.26.69.26.95 0zm-10.5 0l1.1-1.09a.7.7 0 0 0 0-.96.7.7 0 0 0-.96 0l-1.09 1.08a.69.69 0 0 0 0 .96c.25.26.7.26.95 0zm4.78 2.37a.7.7 0 0 0 .68-.68V18a.7.7 0 0 0-.68-.68.7.7 0 0 0-.68.68v1.53c0 .37.3.68.68.68z"
        />
      </g>
    </SvgIcon>
  );
}
