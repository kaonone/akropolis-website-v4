import * as React from 'react';
import cn from 'classnames';

import { useStyles } from './Preview.style';
import { Typography } from 'shared/view/elements';

interface IProps {
  title: string;
  titleTheme?: 'large' | 'medium';
  subtitle?: React.ReactNode;
  description: string;
}

export function Preview(props: IProps) {
  const { title, titleTheme = 'medium', description, subtitle } = props;
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <Typography variant="h3" className={cn(classes.title, classes[titleTheme])}>
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
