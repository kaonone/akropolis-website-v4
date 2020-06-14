import * as React from 'react';

import { useStyles } from './Preview.style';
import { Typography } from 'shared/view/elements';

interface IProps {
  title: string;
  subtitle?: React.ReactNode;
  description: string;
}

export function Preview(props: IProps) {
  const { title, description, subtitle } = props;
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
      <Typography className={classes.description}>{description}</Typography>
    </article>
  );
}
