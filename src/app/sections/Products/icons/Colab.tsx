// tslint:disable: max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 'unset',
    height: '0.571em',
    fontSize: 'inherit',
    marginBottom: '0.085em',
  },
  title: {
    width: '6em',
    lineHeight: 1.2,
    fontSize: '0.1em',
    textTransform: 'uppercase',
  },
});

export function Colab() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SvgIcon className={classes.icon} viewBox="0 0 33 40">
        <path
          fill="currentColor"
          d="M30.5 8.55h-6.36V6.48h8.4v19.71H30.5V8.55zM2.2 20.42H.16V40h11.1v-2.07H2.21v-17.5zm2.43-17.1h-.47V.14h1.53c.96.01 1.64.7 1.64 1.6 0 .9-.68 1.57-1.65 1.59H4.63zm.14-.56h.9c.63-.01 1.05-.44 1.05-1.03A1 1 0 0 0 5.7.68h-.96v2.08h.04zm-3.3.56h1.85v-.56h-1.3V.7h1.3V.12H.15V.7h1.3v2.07H.15v.56h1.32zM15.2 1.73a1.74 1.74 0 0 1-3.47 0A1.71 1.71 0 0 1 13.46 0c.96 0 1.75.78 1.75 1.73zM13.46.59a1.14 1.14 0 1 0 0 2.27 1.13 1.13 0 0 0 0-2.27zM8.02.14v3.19h3.2v-.56H8.61V2h2.04v-.54H8.59V.7h2.61V.14H8.02zm14.52 11.41c0 2.9-2.34 5.1-5.22 5.1a5.1 5.1 0 1 1 0-10.21 5.13 5.13 0 0 1 5.22 5.11zm-5.2-3.24c-1.82 0-3.15 1.36-3.15 3.24 0 1.92 1.3 3.24 3.15 3.24 1.8 0 3.15-1.32 3.15-3.24a3.1 3.1 0 0 0-3.15-3.24zM5.2 16.67c1.9 0 3.48-.93 4.33-2.44l-1.52-1.07c-.66 1.05-1.57 1.67-2.8 1.67a3.08 3.08 0 0 1-3.16-3.23c0-1.93 1.34-3.29 3.16-3.29 1.23 0 2.16.61 2.8 1.67L9.54 8.9a4.86 4.86 0 0 0-4.32-2.46A5.1 5.1 0 0 0 0 11.55a5.1 5.1 0 0 0 5.2 5.12zM29.48 40h-4.33v-9.79h3.46c1.8 0 3.08 1.12 3.08 2.73 0 .73-.27 1.33-.73 1.77a2.45 2.45 0 0 1 1.72 2.42c0 1.68-1.31 2.87-3.2 2.87zm-2.4-5.83h1.36c.82 0 1.26-.46 1.26-1.13 0-.67-.44-1.11-1.26-1.11h-1.37v2.24zm3.65 2.88c0-.76-.52-1.24-1.38-1.24h-2.28v2.46h2.28c.86 0 1.38-.46 1.38-1.22zM15.52 40H13.4l4.26-9.79h.66L22.58 40h-2.11l-.54-1.25h-3.9L15.51 40zm2.47-6.1l-1.26 3.23h2.5L18 33.9z"
        />
      </SvgIcon>
      <span className={classes.title}>Product validation day</span>
    </div>
  );
}
