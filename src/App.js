import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import DynamicHooksCounter from './components/DynamicHooksCounter';
import HooksCounter from './components/HooksCounter';
import VariableCounter from './components/VariableCounter';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <h3 className="text-center text-2xl font-bold mt-5">HooksCounter</h3>
      <HooksCounter />
      <h3 className="text-center text-2xl font-bold mt-5">
        DynamicHooksCounter
      </h3>
      <DynamicHooksCounter />
      <h3 className="text-center text-2xl font-bold mt-5">
        VariableCounter without props
      </h3>
      <VariableCounter />
      <h3 className="text-center text-2xl font-bold mt-5">VariableCounter</h3>
      <VariableCounter dynamic />
    </Provider>
  );
}
