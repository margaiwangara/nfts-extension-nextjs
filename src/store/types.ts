export interface IUser {
  name: string;
  email: string;
  phone: string;
  accountId: string;
  verificationCode: number;
  password: string;
}

export interface IState {
  counter: number;
  user: IUser;
}
