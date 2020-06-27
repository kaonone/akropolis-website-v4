import React from 'react';
import cn from 'classnames';
import { makeStyles, rgba } from 'shared/styles';
import { Typography } from 'shared/view/elements';

interface CardProps {
  className?: string;
  variant?: 'outlined' | 'contained';
  label?: string;
  children: React.ReactNode;
  extraTop?: React.ReactNode;
  extraBottom?: React.ReactNode;
}

export function Card(props: CardProps) {
  const { label, variant = 'outlined', children, extraTop, extraBottom, className } = props;
  const classes = useStyles();
  return (
    <div
      className={cn(className, classes.root, {
        [classes.outlined]: variant === 'outlined',
        [classes.contained]: variant === 'contained',
      })}
    >
      {extraTop && <div className={cn(classes.extra, classes.top)}>{extraTop}</div>}
      {children}
      {label && (
        <Typography component="div" className={classes.label}>
          <span>{label}</span>
        </Typography>
      )}
      {extraBottom && <div className={cn(classes.extra, classes.bottom)}>{extraBottom}</div>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    transition: theme.transitions.create(['border-color', 'background-color']),

    '&$outlined': {
      border: `1px solid ${rgba(
        theme.palette.type === 'light' ? theme.colors.shark : theme.colors.white,
        theme.palette.type === 'light' ? 0.2 : 0.25,
      )}`,
      WebkitBackgroundClip: 'padding-box',
      backgroundClip: 'padding-box',
    },
    '&$contained': {
      backgroundColor: theme.palette.type === 'light' ? theme.colors.zumthor : theme.colors.scarpaFlow,
    },
  },

  extra: {
    '&$top': {
      marginBottom: theme.spacing(1.5),
    },
    '&$bottom': {
      paddingTop: theme.spacing(2.5),
      marginTop: 'auto',
    },
  },

  label: {
    position: 'absolute',
    top: 0,
    left: theme.spacing(2),
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing(2.5),
    borderRadius: theme.spacing(1.25),
    color: theme.colors.white,
    background: theme.gradients.main.linear('to right'),

    padding: theme.spacing(0.125, 0.75, 0.375),
    fontSize: theme.spacing(1.25),
    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(0.25, 1.25),
      fontSize: theme.spacing(1.5),
    },
  },

  top: {},
  bottom: {},
  outlined: {},
  contained: {},
}));
