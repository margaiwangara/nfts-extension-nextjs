import { SET_CURRENT_USER } from '../actionTypes';
import { IUser } from '../types';

interface IAction {
  type: typeof SET_CURRENT_USER;
  payload: IUser;
}

const INITIAL_STATE: IUser = {
  user: {
    name: '',
    email: '',
    phone: '',
    accountId: '',
    verificationCode: null,
  },
  isAuthenticated: false,
};

function userReducer(state = INITIAL_STATE, action: IAction): IUser {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user: {
          ...state?.user,
          ...action?.payload?.user,
        },
        isAuthenticated: !!action?.payload?.isAuthenticated,
      };
    default:
      return state;
  }
}

export default userReducer;
