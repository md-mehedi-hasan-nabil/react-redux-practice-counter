import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

function Counter({ increment, decrement, count }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            onClick={increment}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow-lg"
          >
            Increment
          </button>
          <button
            onClick={decrement}
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
    count: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
