import React, { useMemo } from 'react';
import useSWR from 'swr';
import { Chart, Point } from 'app/components/Chart/Chart';
import { Loading } from 'app/components/Loading/Loading';

export function DevActivityChartSync() {
  const query = useMemo(() => getQuery(), []);
  const response = useSWR<Point[]>(query, (body) =>
    fetch('https://api.santiment.net/graphql', {
      headers: {
        'content-type': 'application/json',
      },
      body,
      method: 'POST',
    }).then(async (resp) => {
      const responseData: Response = await resp.json();
      return responseData.data.getMetric.timeseriesData
        .map(({ datetime, value }) => ({
          datetime: new Date(datetime).getTime(),
          value,
        }))
        .sort(({ datetime }) => datetime - datetime);
    }),
  );

  return <Loading response={response}>{response.data && <Chart points={response.data} />}</Loading>;
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
  ).toISOString()}\\"\\n      interval: \\"3d\\"){\\n        datetime\\n        value\\n      }\\n  }\\n}","variables":{},"operationName":null}`;
}
