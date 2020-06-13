import * as React from 'react';
import cn from 'classnames';

import { useTranslatedDate } from 'services/i18n';
import { IconButton, Link } from 'shared/view/elements';
import { LaunchIcon, ChromeReaderMode, getSocialIconByLink } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './NewsCard.style';

interface IProps {
  summary: string;
  url?: string;
  date: string;
}

function NewsCard(props: IProps & StylesProps) {
  const { classes, summary, url, date } = props;

  const translatedDate = useTranslatedDate(date);
  const SourceIcon = url ? getSocialIconByLink(url, ChromeReaderMode) : ChromeReaderMode;

  return (
    <article className={classes.root}>
      <p className={classes.summary}>{summary}</p>
      <footer className={classes.footer}>
        <SourceIcon className={classes.icon} />
        <div className={classes.date}>{translatedDate}</div>
        <IconButton
          component={Link}
          href={url}
          className={cn(classes.linkIcon, { [classes.hidden]: !url })}
          target="_target"
          rel="noopener noreferrer"
        >
          <LaunchIcon fontSize="inherit" />
        </IconButton>
      </footer>
    </article>
  );
}

export default provideStyles(NewsCard);
