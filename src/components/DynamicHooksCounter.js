import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/dynamicCounter/actions';

export default function DynamicHooksCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={() => incrementHandler(5)}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(5)}
            className="bg-red-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
