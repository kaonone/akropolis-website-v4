import * as React from 'react';

import events from 'data/events';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';

import { IEvent } from 'shared/types/models';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import { CURRENT_EVENTS_LENGTH } from '../constants';
import EventSelector from './EventSelector/EventSelector';
import EventPreview from './EventPreview/EventPreview';

interface IProps {
  customEvent?: IEvent | null;
  onChangeSelectedEvent?(): void;
}

const currentEvents = events.slice(0, CURRENT_EVENTS_LENGTH);

function CurrentEvents(props: IProps) {
  const { customEvent, onChangeSelectedEvent } = props;
  const { t, tKeys } = useTranslate();
  const [selectedEvent, selectEvent] = React.useState(currentEvents[0]);

  const handleSelectEvent = React.useCallback((event: IEvent) => {
    selectEvent(event);
    onChangeSelectedEvent && onChangeSelectedEvent();
  }, [onChangeSelectedEvent]);

  return (
    <PageBlock xsVPadding={1} mdVPadding={2} lgVPadding={12} anchorName="events">
      <Section title={t(tKeys.sections.events.title.getKey())}>
        <Grid container direction="row-reverse" spacing={3}>
          <Grid item xs={12} md={8}>
            <EventPreview event={customEvent || selectedEvent} />
          </Grid>
          <Grid item xs={12} md={4}>
            <EventSelector
              events={currentEvents}
              selectedEvent={customEvent || selectedEvent}
              onSelect={handleSelectEvent}
            />
          </Grid>
        </Grid>
      </Section>
    </PageBlock>
  );
}

export default CurrentEvents;
