import * as React from 'react';

import { StylesProps, provideStyles } from './Preview.style';
import { LaunchIcon, Link } from 'shared/view/elements';

interface IProps {
  title: string;
  description: string;
  moreLink?: string;
}

function Preview(props: IProps & StylesProps) {
  const { classes, title, description, moreLink } = props;
  return (
    <article className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      {moreLink && (
        <Link href={moreLink} target="_blank" rel="noopener noreferrer" className={classes.moreLink}>
          Learn more
          <LaunchIcon className={classes.moreLinkIcon} />
        </Link>
      )}
    </article>
  );
}

export default provideStyles(Preview);
