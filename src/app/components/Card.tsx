import React from 'react';
import cn from 'classnames';
import { makeStyles, rgba } from 'shared/styles';
import { Typography } from 'shared/view/elements';

interface CardProps {
  className?: string;
  variant?: 'outlined' | 'contained';
  label?: string;
  children: React.ReactNode;
}

export function Card(props: CardProps) {
  const { label, variant = 'outlined', children, className } = props;
  const classes = useStyles();
  return (
    <div
      className={cn(className, classes.root, {
        [classes.outlined]: variant === 'outlined',
        [classes.contained]: variant === 'contained',
      })}
    >
      {children}
      {label && (
        <div className={classes.label}>
          <Typography component="span">{label}</Typography>
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: theme.spacing(0.5),

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

    padding: theme.spacing(0.25, 0.75),
    fontSize: theme.spacing(1.25),
    [theme.breakpoints.up('tabletXS')]: {
      padding: theme.spacing(0.25, 1.25),
      fontSize: theme.spacing(1.5),
    },
  },

  outlined: {},
  contained: {},
}));
