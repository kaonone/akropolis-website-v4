// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useTheme } from 'shared/styles';
import { MainSvgGradient } from './MainSvgGradient';

export function Moon(props: GetProps<typeof SvgIcon>) {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" preserveAspectRatio="none">
      <MainSvgGradient />
      <g fill="none" fillRule="evenodd">
        <path
          fill={theme.palette.type === 'light' ? 'currentColor' : `url(#${MainSvgGradient.ID})`}
          d="M12.75 18.98c3.22 0 5.84-1.7 7.04-4.46.1-.21.12-.39.12-.48a.54.54 0 0 0-.53-.55 1 1 0 0 0-.43.1c-.58.24-1.47.4-2.35.4-4.02 0-6.51-2.42-6.51-6.32 0-1.1.18-2.08.45-2.6a.98.98 0 0 0 .15-.5.59.59 0 0 0-.58-.57c-.07 0-.22.02-.44.1A7.76 7.76 0 0 0 5 11.22a7.51 7.51 0 0 0 7.75 7.76zm.06-1.25a6.35 6.35 0 0 1-6.55-6.57 6.64 6.64 0 0 1 2.99-5.53 6.56 6.56 0 0 0-.34 2.18c0 4.59 2.8 7.33 7.5 7.33.7 0 1.32-.08 1.9-.28a6.43 6.43 0 0 1-5.5 2.87z"
        />
      </g>
    </SvgIcon>
  );
}
