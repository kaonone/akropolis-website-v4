import * as React from 'react';

import { StylesProps, provideStyles } from './OpenSourceDevelopmentCard.style';

interface IProps {
  url: string;
  title: string;
  description: string;
}

function OpenSourceDevelopmentCard(props: IProps & StylesProps) {
  const { classes, url, title, description } = props;

  return (
    <a className={classes.root} href={url} target="_blank" rel="noopener noreferrer">
      <article>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </article>
    </a>
  );
}

export default provideStyles(OpenSourceDevelopmentCard);
