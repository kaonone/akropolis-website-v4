import React, { useMemo } from 'react';
import useSWR from 'swr';
import { Chart, Point } from './Chart/Chart';

export function DevActivitySync() {
  const query = useMemo(() => getQuery(), []);
  const { data, error } = useSWR<Point[]>(query, (body) =>
    fetch('https://api.santiment.net/graphql', {
      headers: {
        'content-type': 'application/json',
      },
      body,
      method: 'POST',
    }).then(async (response) => {
      const responseData: Response = await response.json();
      return responseData.data.getMetric.timeseriesData
        .map(({ datetime, value }) => ({
          datetime: new Date(datetime).getTime(),
          value,
        }))
        .sort(({ datetime }) => datetime - datetime);
    }),
  );

  if (error) {
    return <div>failed to load {error}</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return <Chart points={data} />;
}

export interface Response {
  data: {
    getMetric: {
      timeseriesData: Array<{
        datetime: string;
        value: number;
      }>;
    };
  };
}

function getQuery() {
  // tslint:disable: max-line-length
  return `{"query":"{\\n  getMetric(metric: \\"dev_activity\\"){\\n    timeseriesData(\\n      slug: \\"akropolis\\"\\n      from: \\"2020-02-10T07:00:00Z\\"\\n      to: \\"${new Date(
    Date.now() - 24 * 60 * 60 * 1000,
  ).toISOString()}\\"\\n      interval: \\"1w\\"){\\n        datetime\\n        value\\n      }\\n  }\\n}","variables":{},"operationName":null}`;
}
