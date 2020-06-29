import * as React from 'react';

import { IEvent } from 'shared/types/models';
import { Grid, Link } from 'shared/view/elements';
import { getEventTense } from 'shared/helpers/model';
import { useTranslate } from 'services/i18n';

import DateButton from './DateButton/DateButton';
import { StylesProps, provideStyles } from './EventSelector.style';

interface IProps {
  events: IEvent[];
  selectedEvent: IEvent;
  onSelect(event: IEvent): void;
}

function EventSelector(props: IProps & StylesProps) {
  const { classes, events, selectedEvent, onSelect } = props;
  const { t, tKeys } = useTranslate();

  return (
    <Grid container spacing={5}>
      {events.map((event, index) => (
        <Grid
          item
          container
          className={classes.item}
          xs={6}
          key={index}
        >
          <Grid item xs={4}>
            <DateButton date={event.startDate} selected={event === selectedEvent} onClick={onSelect.bind(null, event)}>
              {event.eventName}
            </DateButton>
          </Grid>
          <Grid item xs={8}>
            <Link className={classes.title} onClick={onSelect.bind(null, event)}>
              {event.eventName}
            </Link>
            <div className={classes.subtitle}>
              {t(tKeys.shared.eventTenses[getEventTense(event.startDate, event.finishDate)].getKey())}
            </div>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default provideStyles(EventSelector);
