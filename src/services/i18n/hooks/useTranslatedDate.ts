import { ITranslateFunction } from '../namespace';
import { tKeys } from '../constants';
import useTranslate from './useTranslate';

interface IRange {
  from: string;
  to?: string;
}

export default function useTranslatedDate(date: string | IRange): string {
  const { t } = useTranslate();

  const from = typeof date === 'string' ? date : date.from;
  const to = typeof date === 'string' ? null : (date.to || null);

  if (!isAllowedInputDateFormat(from) || (to && !isAllowedInputDateFormat(to))) {
    return '';
  }

  if (!to) {
    return formatDate(from, t, {
      withMonth: true,
      withYear: true,
    });
  }

  const [fromMonth, , fromYear] = decomposeDate(from);
  const [toMonth, , toYear] = decomposeDate(to);

  const fromWithMonth = fromYear !== toYear || fromMonth !== toMonth;

  const formatedFrom = formatDate(from, t, {
    isShortMonth: true,
    withMonth: fromWithMonth,
    withYear: fromYear !== toYear,
  });

  const formatedTo = formatDate(to, t, {
    isShortMonth: fromWithMonth,
    withMonth: true,
    withYear: true,
  });

  return [formatedFrom, formatedTo].join(fromWithMonth ? ' - ' : '-');
}

interface IFormatOptions {
  withMonth?: boolean;
  withYear?: boolean;
  isShortMonth?: boolean;
}

function formatDate(date: string, t: ITranslateFunction, options: IFormatOptions) {
  const { isShortMonth, withMonth, withYear } = options;
  const [month, day, year] = decomposeDate(date);
  const monthKey = Number(month) as Exclude<keyof typeof tKeys.shared.date.months, 'concat'>;
  const components = [
    day,
    withMonth && (t(tKeys.shared.date[isShortMonth ? 'monthsShort' : 'months'][monthKey].getKey())),
    withYear && year,
  ];
  return components.filter(Boolean).join(' ');
}

function decomposeDate(date: string): [number, number, number] {
  const [month, day, year] = date.split('.');
  return [Number(month), Number(day), Number(year)];
}

function isAllowedInputDateFormat(date: string): boolean {
  const allowedFormat = /^\d\d?\.\d\d?\.\d\d\d\d$/.test(date);
  if (!allowedFormat) {
    console.error('Not allowed date format: ' + date);
  }
  return allowedFormat;
}
