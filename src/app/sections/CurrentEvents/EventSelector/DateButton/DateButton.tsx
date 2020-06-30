import * as React from 'react';
import cn from 'classnames';
import { Omit, GetProps } from '_helpers';

import { useTranslate } from 'services/i18n';
import { ButtonBase } from 'shared/view/elements';

import { StylesProps, provideStyles } from './DateButton.style';

interface IProps {
  date: string;
  selected: boolean;
}

type ExtraProps = Omit<GetProps<typeof ButtonBase>, 'focusRipple' | 'className' | 'focusVisibleClassName' | 'classes'>;

function DateButton(props: IProps & StylesProps & ExtraProps) {
  const { classes, selected, date, ...rest } = props;
  const { t, tKeys } = useTranslate();
  const [month, day] = date.split('.');
  const monthKey = Number(month) as Exclude<keyof typeof tKeys.shared.date.months, 'concat'>;

  return (
    <ButtonBase
      focusRipple
      className={cn(classes.root, { [classes.selected]: selected })}
      focusVisibleClassName={classes.focusVisible}
      {...rest}
    >
      <div className={classes.day}>{Number(day)}</div>
      <div className={classes.month}>{t(tKeys.shared.date.months[monthKey].getKey())}</div>
    </ButtonBase>
  );
}

export default provideStyles(DateButton);
