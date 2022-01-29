import { wrapper } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../store/types';

function Home() {
  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>{counter}</h1>
      <button
        onClick={() =>
          dispatch({
            type: 'INCREMENT',
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'DECREMENT',
          })
        }
      >
        Decrement
      </button>
    </section>
  );
}

export default wrapper.withRedux(Home);
