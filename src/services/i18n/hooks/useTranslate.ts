import { useContext } from 'react';
import { I18nContext } from '../constants';
import { ITranslateProps } from '../namespace';

export default function useTranslate(): ITranslateProps {
  return useContext(I18nContext);
}
