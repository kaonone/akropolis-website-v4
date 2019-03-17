import * as React from 'react';

import { StylesProps, provideStyles } from './Preview.style';
import { LaunchIcon, Link } from 'shared/view/elements';

interface IProps {
  title: string;
  subtitle?: string;
  titleIcon?: React.ReactNode;
  description: string;
  moreLink?: string;
  isComingSoon?: boolean;
}

function Preview(props: IProps & StylesProps) {
  const { classes, title, description, moreLink, titleIcon, isComingSoon, subtitle } = props;
  return (
    <article className={classes.root}>
      <h3 className={classes.title}>
        {titleIcon && <span className={classes.titleIcon}>{titleIcon}</span>}
        {title}
      </h3>
      {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
      <p className={classes.description}>{description}</p>
      {(moreLink || isComingSoon) && (
        <footer className={classes.footer}>
          {moreLink && (
            <Link href={moreLink} target="_blank" rel="noopener noreferrer" className={classes.moreLink}>
              Learn more
              <LaunchIcon className={classes.moreLinkIcon} />
            </Link>
          )}
          {isComingSoon && (
            <span>Coming soon</span>
          )}
        </footer>
      )}
    </article>
  );
}

export default provideStyles(Preview);
