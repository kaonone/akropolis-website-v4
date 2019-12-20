import * as React from 'react';

import { LaunchIcon, Link } from 'shared/view/elements';

import { StylesProps, provideStyles } from './OpenSourceDevelopmentCard.style';

interface IProps {
  url: string;
  title: string;
  description: string;
}

function OpenSourceDevelopmentCard(props: IProps & StylesProps) {
  const { classes, url, title, description } = props;

  return (
    <article className={classes.root}>
      <Link href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
        <h3 className={classes.title}>{title}</h3>
        <LaunchIcon className={classes.linkIcon} />
      </Link>
      <p className={classes.description}>{description}</p>
    </article>
  );
}

export default provideStyles(OpenSourceDevelopmentCard);
