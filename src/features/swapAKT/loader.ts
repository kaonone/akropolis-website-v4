import { Entry } from './entry';

export async function loadEntry(): Promise<Entry> {
  const feature = await import(/* webpackChunkName: "swapAKT" */ './entry');
  return feature.entry;
}
