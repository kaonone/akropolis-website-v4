import React from 'react';
import Polyglot from 'node-polyglot';

import { LOCALE_STORAGE_KEY } from 'core/constants';

import buildTranslationKeys from './helpers/buildTranslationKeys';
import { Lang, ITranslateFunction, ITranslateProps } from './namespace';
import { en, phrasesByLocale } from './locales';

export const LANGUAGES: Lang[] = Object.keys(phrasesByLocale) as Lang[];

const storageLanguage = (() => {
  try {
    return JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY) || 'null') as Lang | null;
  } catch (error) {
    return null;
  }
})();

export const INITIAL_LANGUAGE: Lang = storageLanguage || 'en';

export const tKeys = buildTranslationKeys(en);

const polyglot: Polyglot = new Polyglot({
  locale: INITIAL_LANGUAGE,
  phrases: phrasesByLocale[INITIAL_LANGUAGE],
});

export const I18nContext = React.createContext<ITranslateProps<typeof tKeys>>({
  tKeys,
  t: polyglot.t.bind(polyglot) as ITranslateFunction,
  locale: INITIAL_LANGUAGE,
  changeLanguage: () => null,
});
