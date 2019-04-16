import en from './en';
import ja from './ja';
import ko from './ko';

const phrasesByLocale: {
  en: typeof en,
  ja: typeof ja,
  ko: typeof ko,
} = { en, ja, ko };

export { en, phrasesByLocale };
