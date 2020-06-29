import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { IEvent } from 'shared/types/models';
import { Grid } from 'shared/view/elements';
import { EventCard } from 'shared/view/components';
import events from 'data/events';

import EventSelector from './EventSelector/EventSelector';

interface IProps {
  className?: string;
  customEvent?: IEvent | null;
  onChangeSelectedEvent?(): void;
}

const currentEvents = events.slice(0, 6);

function CurrentEvents(props: IProps) {
  const { onChangeSelectedEvent, className } = props;
  const [selectedEvent, selectEvent] = React.useState(currentEvents[0]);

  const handleSelectEvent = React.useCallback(
    (event: IEvent) => {
      selectEvent(event);
      onChangeSelectedEvent && onChangeSelectedEvent();
    },
    [onChangeSelectedEvent],
  );

  return (
    <Section className={className}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <EventSelector events={currentEvents} selectedEvent={selectedEvent} onSelect={handleSelectEvent} />
        </Grid>
        <Grid item xs={12} md={6}>
          <EventCard event={selectedEvent} />
        </Grid>
      </Grid>
    </Section>
  );
}

export { CurrentEvents };
