import * as React from 'react';
import cn from 'classnames';

import { useTranslate } from 'services/i18n';
import { IEvent } from 'shared/types/models';
import { Grid } from 'shared/view/elements';
import { getEventTense } from 'shared/helpers/model';

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
    <Grid container spacing={16}>
      {events.map((event, index) => (
        <Grid
          item
          container
          wrap="nowrap"
          key={index}
          spacing={16}
          className={cn(classes.item, { [classes.selected]: event === selectedEvent })}
        >
          <Grid item>
            <DateButton
              date={event.startDate}
              selected={event === selectedEvent}
              onClick={onSelect.bind(null, event)}
            >
              {event.eventName}
            </DateButton>
          </Grid>
          <Grid item xs="auto">
            <div className={classes.title}>{event.eventName}</div>
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
