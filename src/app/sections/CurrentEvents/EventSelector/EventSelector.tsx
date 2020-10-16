import * as React from 'react';

import { IEvent } from 'shared/types/models';
import { Grid, Typography, Dotdotdot } from 'shared/view/elements';
import { getEventTense } from 'shared/helpers/model';
import { useTranslate } from 'services/i18n';

import DateButton from './DateButton/DateButton';
import { StylesProps, provideStyles } from './EventSelector.style';
import { NoSsr } from 'services/adaptability';

interface IProps {
  events: IEvent[];
  selectedEvent: IEvent;
  onSelect(event: IEvent): void;
}

function EventSelector(props: IProps & StylesProps) {
  const { classes, events, selectedEvent, onSelect } = props;
  const { t, tKeys } = useTranslate();

  return (
    <Grid container spacing={4}>
      {events.map((event, index) => (
        <Grid container spacing={4} wrap="nowrap" item className={classes.item} xs={12} md={6} key={index}>
          <Grid item>
            <DateButton date={event.startDate} selected={event === selectedEvent} onClick={onSelect.bind(null, event)}>
              {event.eventName}
            </DateButton>
          </Grid>
          <Grid item xs>
            <Typography className={classes.title} onClick={onSelect.bind(null, event)} component="div">
              <NoSsr>
                <Dotdotdot clamp={2}>{event.eventName}</Dotdotdot>
              </NoSsr>
            </Typography>
            <Typography className={classes.subtitle}>
              {t(tKeys.shared.eventTenses[getEventTense(event.startDate, event.finishDate)].getKey())}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default provideStyles(EventSelector);
