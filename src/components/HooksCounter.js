import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

function HooksCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={incrementHandler}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Increment
          </button>
          <button
            onClick={decrementHandler}
            className="bg-red-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default HooksCounter;
