import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';

function Home() {
  const router = useRouter();
  const user = useSelector((state: IState) => state.user);

  useEffect(() => {
    router.replace(user?.accountId ? '/home' : '/register');
  }, [router, user]);
  return <></>;
}

export default Home;
