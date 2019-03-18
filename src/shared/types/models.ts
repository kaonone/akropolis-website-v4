export interface IEvent {
  eventName: string;
  link: string;
  location: string;
  description: string;
  startDate: string;
  finishDate?: string;
  image1x: string;
  image2x: string;
}

export type EventTense = 'past' | 'current' | 'future';
