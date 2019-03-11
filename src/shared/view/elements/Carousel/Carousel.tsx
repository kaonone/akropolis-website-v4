import * as React from 'react';
import cn from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import { StylesProps, provideStyles } from './Carousel.style';

interface IProps {
  children: React.ReactElement[];
}

function Carousel(props: IProps & StylesProps) {
  const { classes, children } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className={classes.root}>
      <SwipeableViews index={currentSlide} onChangeIndex={setCurrentSlide}>
        {children}
      </SwipeableViews>
      <div className={classes.pagination}>
        {children.map((_, i) => (
          <div key={i} className={classes.pagItemWrapper} onClick={setCurrentSlide.bind(null, i)}>
            <div className={cn(classes.pagItem, { [classes.active]: i === currentSlide })} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default provideStyles(Carousel);
