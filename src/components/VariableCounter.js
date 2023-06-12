import { connect } from 'react-redux';
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
} from '../redux/dynamicCounter/actions';
import { decrement, increment } from '../redux/counter/actions';

function VariableCounter({ count, incrementHandler, decrementHandler }) {
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
            onClick={() => decrementHandler(2)}
            className="bg-red-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    incrementHandler: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrement(value))
      : () => dispatch(increment()),
    decrementHandler: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(value))
      : () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
