import * as React from 'react';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Line, LineChart } from 'recharts';

import { useStyles } from './Chart.style';
import { useTheme } from 'shared/styles';

export interface Point {
  datetime: number;
  value: number;
}

interface IProps {
  points: Point[];
}

function Chart(props: IProps) {
  const { points } = props;
  const classes = useStyles();
  const theme = useTheme();

  const renderXTick = React.useCallback(
    (tickProps: any) => {
      const {
        visibleTicksCount,
        index,
        payload: { value },
        ...rest
      } = tickProps;
      return (
        <text {...rest} dy={16} fill={theme.palette.text.secondary}>
          {new Date(value).toLocaleDateString()}
        </text>
      );
    },
    [theme.palette.type],
  );

  const renderYTick = React.useCallback(
    (tickProps: any) => {
      const {
        visibleTicksCount,
        index,
        payload: { value },
        ...rest
      } = tickProps;
      return (
        <text {...rest} dx={-4} fill={theme.palette.text.secondary}>
          {value}
        </text>
      );
    },
    [theme.palette.type],
  );

  return (
    <div className={classes.root}>
      <div className={classes.graphic}>
        <ResponsiveContainer>
          <LineChart
            data={points}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#564cf2" />
                <stop offset="100%" stopColor="#cf3ef0" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={theme.palette.type === 'dark' ? '#666' : '#ccc'} vertical={false} />
            <XAxis dataKey="datetime" tick={renderXTick} />
            <YAxis tick={renderYTick} />
            <Tooltip content={<noscript />} />
            <Line dot={false} type="monotone" dataKey="value" stroke="url(#colorUv)" strokeWidth={2} fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { Chart };
