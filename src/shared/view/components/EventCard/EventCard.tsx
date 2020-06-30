import * as React from 'react';

import { Picture } from 'shared/view/elements';
import { IEvent } from 'shared/types/models';

import { StylesProps, provideStyles } from './EventCard.style';

interface IProps {
  event: IEvent;
}

function EventCard(props: IProps & StylesProps) {
  const { classes, event } = props;
  const { image1x, image2x, eventName, link } = event;

  return (
    <div className={classes.root}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Picture
          fullWidth
          className={classes.image}
          alt={eventName}
          title={`${eventName} - Akropolis`}
          type="image/png"
          x1={image1x}
          x2={image2x}
        />
      </a>
    </div>
  );
}

export default provideStyles(EventCard);
