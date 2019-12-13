import * as React from 'react';

import { useTranslate, tKeys } from 'services/i18n';
import { Preview } from 'shared/view/components';

import { StylesProps, provideStyles } from './OpenSourceDevelopmentCard.style';

interface IProps {
  url: string;
  title: string;
  description: string;
}

function OpenSourceDevelopmentCard(props: IProps & StylesProps) {
  const { classes, url, title, description } = props;
  const { t } = useTranslate();

  return (
    <div className={classes.root}>
      <Preview
        title={title}
        description={description}
        moreLink={url}
        moreLinkText={t(tKeys.sections.openSourceDevelopment.moreLinkText.getKey())}
      />
    </div>
  );
}

export default provideStyles(OpenSourceDevelopmentCard);
