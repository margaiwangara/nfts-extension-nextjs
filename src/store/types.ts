export interface IUser {
  user: {
    name: string;
    email: string;
    phone: string;
    accountId: string;
    verificationCode: number;
  };
  isAuthenticated?: boolean;
}

export interface IState {
  counter: number;
  user: IUser;
}
