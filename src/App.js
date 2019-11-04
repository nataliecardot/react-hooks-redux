import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state, action) {
  return state;
}

const initialState = {
  count: 0
}

// Takes a reducer function that takes care of reducing state, i.e., taking our state value as well as an action that's used to update our state, and reducing it to a single value. The first argument is the reducer, and the second argument is the initial state. If we had Redux middleware like Redux Thunk, if we were dealing with asynchronous actions, we'd pass it as an optional third argument
const store = createStore(reducer, initialState);


function App() {
  return (
    // Provider makes store available to all of our components within the component tree
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  return (
    <>
      <h2>Counter</h2>
      <button>+</button>
      <button>-</button>
    </>
  );
}

export default App;
