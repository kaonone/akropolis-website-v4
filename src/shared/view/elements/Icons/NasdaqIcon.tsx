import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function NasdaqIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 1457 1268" xmlSpace="preserve">
      <defs>
        <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="1082.22" y1="967.472" x2="1082.22" y2="-2.39674">
          <stop offset="0" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="0" style={{ stopOpacity: 1, stopColor: '#BEBFBF' }} />
          <stop offset="0.0196078" style={{ stopOpacity: 1, stopColor: '#BEBFBF' }} />
          <stop offset="0.188235" style={{ stopOpacity: 1, stopColor: '#E5E5E5' }} />
          <stop offset="0.219608" style={{ stopOpacity: 1, stopColor: '#E5E5E5' }} />
          <stop offset="0.258824" style={{ stopOpacity: 1, stopColor: '#E5E5E5' }} />
          <stop offset="0.368627" style={{ stopOpacity: 1, stopColor: '#7C7C7C' }} />
          <stop offset="0.478431" style={{ stopOpacity: 1, stopColor: '#F3F3F4' }} />
          <stop offset="0.568627" style={{ stopOpacity: 1, stopColor: '#F3F3F4' }} />
          <stop offset="0.8" style={{ stopOpacity: 1, stopColor: '#F3F3F4' }} />
          <stop offset="0.901961" style={{ stopOpacity: 1, stopColor: 'gainsboro' }} />
          <stop offset="0.909804" style={{ stopOpacity: 1, stopColor: 'gainsboro' }} />
          <stop offset="1" style={{ stopOpacity: 1, stopColor: '#B5B5B5' }} />
        </linearGradient>
        <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="374.73" y1="303.547" x2="374.25" y2="1276.14">
          <stop offset="0" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="0" style={{ stopOpacity: 1, stopColor: '#BEBFBF' }} />
          <stop offset="0.0196078" style={{ stopOpacity: 1, stopColor: '#BEBFBF' }} />
          <stop offset="0.0901961" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="0.14902" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="0.2" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="0.301961" style={{ stopOpacity: 1, stopColor: '#7C7C7C' }} />
          <stop offset="0.4" style={{ stopOpacity: 1, stopColor: '#E5E5E5' }} />
          <stop offset="0.45098" style={{ stopOpacity: 1, stopColor: '#E5E5E5' }} />
          <stop offset="0.890196" style={{ stopOpacity: 1, stopColor: '#9F9FA0' }} />
          <stop offset="1" style={{ stopOpacity: 1, stopColor: '#9F9FA0' }} />
        </linearGradient>
        <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="868.247" y1="1020.14" x2="729.177" y2="635.914">
          <stop offset="0" style={{ stopOpacity: 1, stopColor: 'white' }} />
          <stop offset="1" style={{ stopOpacity: 1, stopColor: '#189FC5' }} />
        </linearGradient>
      </defs>
      <path fill="url(#id0)" fillRule="nonzero" d="M1457 0l-359 0 -330 914c-8,21 -30,38 -54,38l-6 0 363 0c25,0 47,-16 56,-39l330 -913z" />
      <path fill="url(#id2)" fillRule="nonzero" d="M745 316c-25,1 -48,17 -57,41l-117 324 83 230c9,25 32,41 57,41 26,1 49,-16 58,-41l118 -325 -85 -230c-8,-24 -31,-40 -57,-40z" />
      <path fill="url(#id1)" fillRule="nonzero" d="M0 1268l358 0 331 -914c9,-22 30,-36 54,-38l6 0 -364 0c-24,0 -46,16 -55,39l-330 913z" />
    </SvgIcon>
  );
}

export default NasdaqIcon;
