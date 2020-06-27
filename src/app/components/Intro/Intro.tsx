import React from 'react';
import { makeStyles } from 'shared/styles';
import { Typography } from 'shared/view/elements';

interface Props {
  title: React.ReactNode;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Intro(props: Props) {
  const { children, description, icon, title } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
      {children && <div className={classes.body}>{children}</div>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    display: 'flex',
    fontSize: theme.spacing(8.25),
    marginBottom: theme.spacing(5),
  },
  title: {
    fontWeight: 200,

    fontSize: theme.spacing(2.75),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(5),
      marginBottom: theme.spacing(1.75),
    },
  },
  description: {
    fontWeight: 300,

    fontSize: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2),
    },
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2.75),
    },
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up('tabletXS')]: {
      marginTop: theme.spacing(5),
    },
  },
}));
