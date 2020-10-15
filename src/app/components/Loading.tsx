/* tslint:disable:interface-over-type-literal */
import React from 'react';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { RemoteData } from 'utils/remoteData';

type ProgressVariant = 'linear' | 'circle' | 'skeleton';

type DefaultProgressVariant = Extract<ProgressVariant, 'skeleton'>;
const defaultProgressVariant: DefaultProgressVariant = 'skeleton';

type Props<R, E, V extends ProgressVariant> = {
  data: RemoteData<R, E>;
  children: (data: R) => JSX.Element | null;
  progressVariant?: V;
  progressProps?: {
    linear: LinearProgressProps;
    circle: CircularProgressProps;
    skeleton: SkeletonProps;
  }[V];
  component?: React.ComponentType;
  loader?: React.ReactNode;
};

const useStyles = makeStyles({
  linearProgress: {
    flexGrow: 1,
  },
});

export function Loading<R, E, T extends ProgressVariant = DefaultProgressVariant>(
  props: Props<R, E, T>,
) {
  const classes = useStyles();
  const {
    data,
    children,
    loader,
    progressVariant = defaultProgressVariant,
    progressProps,
    component,
  } = props;

  const Wrapper = component || React.Fragment;

  return data.fold(
    () => <div>Initializing...</div>,
    () => (
      <Wrapper>
        {loader ||
          {
            linear: (
              <LinearProgress
                className={classes.linearProgress}
                {...(progressProps as LinearProgressProps)}
              />
            ),
            circle: <CircularProgress {...(progressProps as CircularProgressProps)} />,
            skeleton: <Skeleton {...(progressProps as SkeletonProps)} />,
          }[progressVariant]}
      </Wrapper>
    ),
    error => (
      <Wrapper>
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      </Wrapper>
    ),
    children,
  );
}
