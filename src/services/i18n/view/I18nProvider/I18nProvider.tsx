import React from 'react';
import { bind } from 'decko';
import Polyglot from 'node-polyglot';

import { LOCALE_STORAGE_KEY } from 'core/constants';
import { withProps } from 'shared/helpers/react';

import { ITranslateFunction, Lang, ITranslateKey } from '../../namespace';
import { INITIAL_LANGUAGE, I18nContext, tKeys } from '../../constants';
import { phrasesByLocale as phrases } from '../../locales';

interface IOwnProps {
  phrasesByLocale: typeof phrases;
}

interface IState {
  locale: Lang;
  translator: ITranslateFunction;
  changeLanguage(lang: Lang): void;
}

type IProps = IOwnProps;

class I18nProvider extends React.Component<IProps, IState> {
  public polyglot: Polyglot = new Polyglot({
    locale: INITIAL_LANGUAGE,
    phrases: this.props.phrasesByLocale[INITIAL_LANGUAGE],
  });

  public state: IState = {
    locale: INITIAL_LANGUAGE,
    translator: this.makeTranslator(this.polyglot),
    changeLanguage: this.changeLanguage,
  };

  public componentDidUpdate(prevProps: IProps, prevState: IState) {
    const { phrasesByLocale } = this.props;
    const { locale } = this.state;
    if (prevState.locale !== locale || prevProps.phrasesByLocale !== phrasesByLocale) {
      this.polyglot.locale(locale);
      this.polyglot.replace(phrasesByLocale[locale]);
      this.setState({ translator: this.makeTranslator(this.polyglot) });
    }
  }

  public render() {
    const { children } = this.props;
    const { locale, translator, changeLanguage } = this.state;
    return (
      <I18nContext.Provider value={{ tKeys, t: translator, locale, changeLanguage }}>
        {children}
      </I18nContext.Provider>
    );
  }

  @bind
  private changeLanguage(value: Lang) {
    this.setState({ locale: value });

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(value));
    } catch {
      //
    }
  }

  @bind
  private makeTranslator(polyglot: Polyglot): ITranslateFunction {
    return (phrase: ITranslateKey, smartCountOrInterpolationOptions?: number | Polyglot.InterpolationOptions) => {
      if (typeof phrase === 'string') {
        return polyglot.t(phrase, smartCountOrInterpolationOptions as any);
      }
      return polyglot.t(phrase.key, phrase.params);
    };
  }
}

export default withProps(I18nProvider, { phrasesByLocale: phrases });
