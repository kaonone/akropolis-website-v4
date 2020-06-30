import React from 'react';

import { Typography } from 'shared/view/elements';

import { useStyles } from './Intro.styles';

interface IProps {
  title: React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function Intro({ children, description, icon, title }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      {description && <Typography className={classes.description}>{description}</Typography>}
      {children && <div className={classes.body}>{children}</div>}
    </div>
  );
}

export { Intro };
