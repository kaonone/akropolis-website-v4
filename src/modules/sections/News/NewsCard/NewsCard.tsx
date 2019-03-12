import * as React from 'react';
import cn from 'classnames';

import { LaunchIcon, ChromeReaderMode, TwitterIcon, MediumIcon } from 'shared/view/elements/Icons';
import { StylesProps, provideStyles } from './NewsCard.style';
import { IconButton } from 'shared/view/elements';
import { useTranslate } from 'services/i18n';

interface IProps {
  summary: string;
  sourceIcon?: string;
  url?: string;
  date: string;
}

const sourceIcons: Record<string, (props: { className: string }) => React.ReactElement> = {
  default: (props) => <ChromeReaderMode {...props} />,
  twitter: (props) => <TwitterIcon {...props} />,
  medium: (props) => <MediumIcon {...props} />,
};

function NewsCard(props: IProps & StylesProps) {
  const { classes, summary, sourceIcon, url, date } = props;

  const SourceIcon = sourceIcon && sourceIcons[sourceIcon] || sourceIcons.default;

  return (
    <article className={classes.root}>
      <p className={classes.summary}>{summary}</p>
      <footer className={classes.footer}>
        <SourceIcon className={classes.icon} />
        <div className={classes.date}>{renderDate(date)}</div>
        <IconButton
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

function renderDate(date: string) {
  const allowedFormat = /^\d\d?\.\d\d?\.\d\d\d\d$/;
  if (!allowedFormat) {
    console.error('Not allowed date format in NewsCard: ' + date);
    return <noscript />;
  }
  const [month, day, year] = date.split('.');
  const monthKey = Number(month) as Exclude<keyof typeof tKeys.shared.date.months, 'concat'>;
  const { t, tKeys } = useTranslate();
  return `${day} ${t(tKeys.shared.date.months[monthKey].getKey())} ${year}`;
}

export default provideStyles(NewsCard);
