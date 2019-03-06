import React, { useCallback } from 'react';

import { Lang } from '../../namespace';
import useTranslate from '../../hooks/useTranslate';

interface IOption {
  value: Lang;
  label: string;
}

const options: IOption[] = [
  { value: 'en', label: 'en' },
  { value: 'ru', label: 'ru' },
];

function LanguageSelector() {
  const { locale, changeLanguage } = useTranslate();

  const handleChangeLanguage = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(value as Lang),
    [changeLanguage],
  );

  return (
    <div>
      <select value={locale} onChange={handleChangeLanguage}>
        {options.map(({ value, label }, i) => (
          <option value={value} key={i}>{label}</option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
