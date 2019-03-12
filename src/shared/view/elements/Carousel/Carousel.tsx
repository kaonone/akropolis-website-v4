import * as React from 'react';
import cn from 'classnames';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';

import { ChevronRightIcon } from '../Icons';
import { StylesProps, provideStyles } from './Carousel.style';
import { Omit } from '_helpers';

interface IProps {
  pagination: 'dots' | 'arrows';
  children: React.ReactElement[];
}

type AdditionalProps = Omit<SwipeableViewsProps, 'onChangeIndex' | 'index' | 'ref'>;

function Carousel(props: AdditionalProps & IProps & StylesProps) {
  const { classes, children, theme, pagination, ...rest } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // it's need for viewing slide shadows
  const rootStyle = React.useMemo(
    () => theme && { margin: -theme.spacing.unit, padding: theme.spacing.unit, ...rest.style },
    [theme],
  );
  const containerStyle = React.useMemo(
    () => theme && { margin: -theme.spacing.unit, ...rest.containerStyle },
    [theme],
  );
  const slideStyle = React.useMemo(
    () => theme && { padding: theme.spacing.unit, ...rest.slideStyle },
    [theme],
  );

  return (
    <div className={classes.root}>
      <SwipeableViews
        {...rest}
        style={rootStyle}
        containerStyle={containerStyle}
        slideStyle={slideStyle}
        index={currentSlide}
        onChangeIndex={setCurrentSlide}
      >
        {children}
      </SwipeableViews>
      {pagination === 'dots' && (
        <div className={classes.dotsPagination}>
          {children.map((_, i) => (
            <div key={i} className={classes.dotWrapper} onClick={setCurrentSlide.bind(null, i)}>
              <div className={cn(classes.dot, { [classes.active]: i === currentSlide })} />
            </div>
          ))}
        </div>
      )}
      {pagination === 'arrows' && (
        <>
          <div
            className={cn(classes.arrowPagination, classes.left)}
            onClick={setCurrentSlide.bind(null, (currentSlide - 1 + children.length) % children.length)}
          >
            <ChevronRightIcon className={classes.arrowIcon} />
          </div>
          <div
            className={cn(classes.arrowPagination, classes.right)}
            onClick={setCurrentSlide.bind(null, (currentSlide + 1 + children.length) % children.length)}
          >
            <ChevronRightIcon className={classes.arrowIcon} />
          </div>
        </>
      )}
    </div>
  );
}

export default provideStyles(Carousel);
