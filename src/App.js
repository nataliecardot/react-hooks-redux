import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Using actions disatched to store with useDispatch() hook
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1
      }

    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state;
  }
}

function nameReducer(state = { name: '' }, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload
      }

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer,
  nameReducer
});

const INITIAL_STATE = { };

// Takes a reducer function that takes care of reducing state, i.e., taking our state value as well as an action that's used to update our state, and reducing it to a single value. The first argument is the reducer, and the second argument is the initial state. If we had Redux middleware like Redux Thunk, if we were dealing with asynchronous actions, we'd pass it as an optional third argument
const store = createStore(rootReducer, INITIAL_STATE);


function App() {
  return (
    // Provider makes store available to all of our components within the component tree
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}

function Counter() {
  // One of rules of Hooks is you must execute at the top level of the component you want to use it in
  // useSelector Hook allows you to subscribe to Redux store. Roughly equivalent to mapStateToProps
  // Have to pass argument to it letting it know what piece of state we want from it
  const count = useSelector(state => state.count);

  // When you want to update state with help of an action, we want to dispatch it to our reducer with either or both the type of action we want to be executed on our state and we can also include a payload, a property that holds the actual data in the action object (here we're only using type)
  // useDispatch() hook is similar to mapDispatchToProps, which enabled us to dispatch actions to the store. It returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({
      type: 'INCREMENT_COUNT'
    });
  }

  function decrementCount() {
    dispatch({
      type: 'DECREMENT_COUNT'
    });
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>+</button>
      <button class="button-2" onClick={decrementCount}>−</button>
    </>
  );
}

function Name() {
  const dispatch = useDispatch();

  function handleUpdateName(e) {
    dispatch({
      type: 'UPDATE_NAME',
      payload: e.target.value
    });
  }

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleUpdateName} />
    </div>
  );
}

export default App;
