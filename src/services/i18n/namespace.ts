import Polyglot from 'node-polyglot';

type CustomTranslateFunction = (phrase: IPhraseWithOptions) => string;
interface IPhraseWithOptions {
  key: string;
  params: Record<string, string | number>;
}

export type ITranslateFunction = Polyglot['t'] & CustomTranslateFunction;
export type ITranslateKey = string | IPhraseWithOptions;

export type Lang = 'en' | 'ko' | 'zh';

export interface ITranslateProps<Keys> {
  tKeys: Keys;
  locale: Lang;
  t: ITranslateFunction;
  changeLanguage(lang: Lang): void;
}
