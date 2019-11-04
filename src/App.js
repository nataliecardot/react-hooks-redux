import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

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
  // One of rules of Hooks is you must execute at the top level of the component you want to use it in
  // useSelector Hook allows you to subscribe to Redux store. Roughly equivalent to mapStateToProps
  // Have to pass argument to it letting it know what piece of state we want from it
  const count = useSelector(state => state.count);

  return (
    <>
      <p>Counter: {count}</p>
      <button>+</button>
      <button class="button-2">−</button>
    </>
  );
}

export default App;
