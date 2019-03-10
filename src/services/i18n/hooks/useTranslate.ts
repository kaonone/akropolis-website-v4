import { useContext } from 'react';
import { I18nContext } from '../constants';

export default function useTranslate() {
  return useContext(I18nContext);
}
