import * as React from 'react';

import events from 'data/events';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';

import { IEvent } from 'shared/types/models';
import { Section, EventCard } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import { CURRENT_EVENTS_LENGTH } from '../constants';
import { StylesProps, provideStyles } from './PastEvents.style';

const pastEvents = events.slice(CURRENT_EVENTS_LENGTH);

interface IProps {
  onEventClick(event: IEvent): void;
}

function PastEvents(props: StylesProps & IProps) {
  const { classes, onEventClick } = props;
  const { t, tKeys } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={2} lgVPadding={12}>
      <Section title={t(tKeys.sections.pastEvents.title.getKey())}>
        <Grid container spacing={24}>
          {pastEvents.map((event, index) => (
            <Grid key={index} item xs={12} md={6} className={classes.event} onClick={onEventClick.bind(null, event)}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </PageBlock>
  );
}

export default provideStyles(PastEvents);
