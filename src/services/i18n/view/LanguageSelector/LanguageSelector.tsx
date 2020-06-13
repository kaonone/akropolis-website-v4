import React, { useCallback } from 'react';

import { TextInput, MenuItem } from 'shared/view/elements';
import { Lang } from '../../namespace';
import useTranslate from '../../hooks/useTranslate';
import { StylesProps, provideStyles } from './LanguageSelector.style';

interface IOption {
  value: Lang;
  label: string;
}

const options: IOption[] = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' },
  { value: 'zh', label: '简体中文' },
  { value: 'vi', label: 'Tiếng Việt' },
];

function LanguageSelector(props: StylesProps) {
  const { locale, changeLanguage } = useTranslate();

  const handleChangeLanguage = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => changeLanguage(value as Lang),
    [changeLanguage],
  );

  return (
    <TextInput
      fullWidth={false}
      select
      variant="outlined"
      value={locale}
      onChange={handleChangeLanguage}
      InputProps={{
        classes: {
          input: props.classes.input,
        },
      }}
    >
      {options.map(({ value, label }, i) => (
        <MenuItem value={value} key={i}>
          {label}
        </MenuItem>
      ))}
    </TextInput>
  );
}

export default provideStyles(LanguageSelector);
