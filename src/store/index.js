import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        counter: state.counter + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        counter: state.counter - 1
      });
    case 'TOGGLE_COUNTER':
      return Object.assign({}, state, {
        showCounter: !state.showCounter
      });
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;