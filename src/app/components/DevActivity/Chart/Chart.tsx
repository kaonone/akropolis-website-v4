import * as React from 'react';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';

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

  const renderXTick = React.useCallback((tickProps: any) => {
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
  }, [theme.palette.type]);

  const renderYTick = React.useCallback((tickProps: any) => {
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
  }, [theme.palette.type]);

  return (
    <div className={classes.root}>
      <div className={classes.graphic}>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={points}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke={theme.palette.type === 'dark' ? '#666' : '#ccc'} horizontal={false} />
            <XAxis dataKey="datetime" tick={renderXTick} />
            <YAxis tick={renderYTick} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { Chart };
