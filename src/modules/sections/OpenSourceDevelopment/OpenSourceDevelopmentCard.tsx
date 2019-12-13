import * as React from 'react';

import { useTranslate, tKeys } from 'services/i18n';
import { Preview } from 'shared/view/components';

import { StylesProps, provideStyles } from './OpenSourceDevelopmentCard.style';

export type OpenSourceName = keyof typeof tKeys.sections.openSourceDevelopment.openSourceProducts;

interface IProps {
  url: string;
  name: OpenSourceName;
}

function OpenSourceDevelopmentCard(props: IProps & StylesProps) {
  const { classes, url, name } = props;
  const { t } = useTranslate();

  return (
    <div className={classes.root}>
      <Preview
        title={t(tKeys.sections.openSourceDevelopment.openSourceProducts[name].title.getKey())}
        description={t(tKeys.sections.openSourceDevelopment.openSourceProducts[name].description.getKey())}
        moreLink={url}
        moreLinkText={t(tKeys.sections.openSourceDevelopment.moreLinkText.getKey())}
      />
    </div>
  );
}

export default provideStyles(OpenSourceDevelopmentCard);
