import * as React from 'react';

import { useTranslate } from 'services/i18n';

import { IEvent } from 'shared/types/models';
import { Preview, EventCard } from 'shared/view/components';
import { Grid } from 'shared/view/elements';
import { getEventTense } from 'shared/helpers/model';

interface IProps {
  event: IEvent;
}

function EventPreview(props: IProps) {
  const { event } = props;
  const { eventName, description, link, startDate, finishDate } = event;
  const { t, tKeys } = useTranslate();
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <EventCard event={event} />
      </Grid>
      <Grid item xs={12}>
        <Preview
          title={eventName}
          subtitle={t(tKeys.shared.eventTenses[getEventTense(startDate, finishDate)].getKey())}
          description={description}
          moreLink={link}
        />
      </Grid>
    </Grid>
  );
}

export default EventPreview;
