import { useState, useRef, useEffect } from 'react';

/**
 * Hook for detecting current time period
 * @param times should have format 'HH:MM:SS'
 * @returns index for current time breakpoints
 */
export function useCurrentTimeBreakpoint(times: string[]): string {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(() => times[calcCurrentBreakpoint(times)]);
  const interval = useRef(0);

  useEffect(() => {
    interval.current = window.setInterval(() => setCurrentBreakpoint(times[calcCurrentBreakpoint(times)]), 1000);
    return () => window.clearInterval(interval.current);
  }, [times]);

  return currentBreakpoint;
}

function calcCurrentBreakpoint(times: string[]): number {
  const currTime = new Date().toTimeString().replace(/^(\d\d:\d\d:\d\d).+$/, '$1');

  const index = ['00:00:00', ...times, '24:00:00'].findIndex(
    (cur, i, arr) => (
      i !== arr.length - 1 &&
      cur <= currTime &&
      currTime < arr[i + 1]
    ),
  );

  return index === 0 ? times.length - 1 : index - 1;
}
