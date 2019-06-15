export interface IUser {
  address: string;
  tokens: number;
}

export type UserError = 'notConfirmed' | 'notExist' | 'unknown';
