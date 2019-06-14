export interface IUser {
  address: string;
  tokens: number;
}

export type IUserError = 'notConfirmed' | 'notExist';
