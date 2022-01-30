import { IUser } from '@store/types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '@store/actions/user';
import { useRouter } from 'next/router';

export function useAuth() {
  const user = useSelector((state: IUser) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const register = (key: 'email' | 'phone', value: string) => {
    const randomCode = Math.floor(Math.random() * 1000000);

    dispatch(
      setCurrentUser({
        user: { ...user, [key]: value, verificationCode: randomCode },
      }),
    );

    alert(
      `Your verification code is: ${randomCode}. Please copy for reuse in the next step`,
    );

    router.push('/verification');
  };

  const verify = (code: string) => {
    const verificationCode = user?.verificationCode;

    if (!verificationCode) {
      return;
    }

    if (verificationCode?.toString() !== code) {
      return;
    }

    dispatch(
      setCurrentUser({
        user: { ...user, verificationCode: null },
      }),
    );

    router.push('/create-account');
  };

  const createAccount = (name: string, accountId: string) => {
    if (!name || !accountId) {
      return;
    }

    dispatch(
      setCurrentUser({
        user: { ...user, name, accountId },
      }),
    );

    router.push('/secure-account');
  };

  const secureAccount = (password: string) => {
    if (!password) {
      return;
    }

    router.push('/');
  };

  return {
    register,
    verify,
    createAccount,
    secureAccount,
  };
}
