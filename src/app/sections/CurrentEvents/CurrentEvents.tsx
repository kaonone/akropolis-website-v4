import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { IEvent } from 'shared/types/models';
import { Grid } from 'shared/view/elements';
import { EventCard } from 'shared/view/components';
import { makeStyles } from 'shared/styles';
import events from 'data/events';

import EventSelector from './EventSelector/EventSelector';

interface IProps {
  className?: string;
  customEvent?: IEvent | null;
  onChangeSelectedEvent?(): void;
}

const currentEvents = events.slice(0, 6);

export function CurrentEvents(props: IProps) {
  const classes = useStyles();
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
        <Grid item xs md={6} className={classes.selector}>
          <EventSelector events={currentEvents} selectedEvent={selectedEvent} onSelect={handleSelectEvent} />
        </Grid>
        <Grid item className={classes.event}>
          <EventCard event={selectedEvent} />
        </Grid>
      </Grid>
    </Section>
  );
}

const useStyles = makeStyles(() => ({
  selector: {
    flexGrow: 1,
    maxWidth: 'unset',
  },
  event: {
    flexGrow: 1,
    width: 620,
  },
}));
