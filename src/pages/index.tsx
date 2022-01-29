import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCounterAction,
  decrementCounterAction,
} from '@store/actions/counter';
import { IState } from '@store/types';

function Home() {
  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incrementCounterAction())}>
        increment
      </button>
      <button onClick={() => dispatch(decrementCounterAction())}>
        decrement
      </button>
    </section>
  );
}

export default Home;
