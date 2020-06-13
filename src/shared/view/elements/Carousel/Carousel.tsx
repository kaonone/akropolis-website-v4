import * as React from 'react';
import cn from 'classnames';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';

import { ChevronRightIcon } from '../Icons';
import { StylesProps, provideStyles } from './Carousel.style';
import { Omit } from '_helpers';
import { useTheme } from 'shared/styles';

interface IProps {
  pagination?: 'dots' | 'arrows';
  children: React.ReactElement[];
}

type AdditionalProps = Omit<SwipeableViewsProps, 'onChangeIndex' | 'ref'>;

function Carousel(props: AdditionalProps & IProps & StylesProps) {
  const { classes, children, pagination, style, slideStyle, containerStyle, ...rest } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const theme = useTheme();

  // it's need for viewing slide shadows
  const rootStyle = React.useMemo(
    () => theme && { margin: -theme.spacing(1), padding: theme.spacing(1), ...style },
    [theme],
  );
  const customContainerStyle = React.useMemo(
    () => theme && { margin: -theme.spacing(1), ...containerStyle },
    [theme],
  );
  const customSlideStyle = React.useMemo(
    () => theme && { padding: theme.spacing(1), ...slideStyle },
    [theme],
  );

  return (
    <div className={classes.root}>
      <SwipeableViews
        style={rootStyle}
        containerStyle={customContainerStyle}
        slideStyle={customSlideStyle}
        index={currentSlide}
        onChangeIndex={setCurrentSlide}
        {...rest}
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
