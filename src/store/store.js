import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// reducer: reducer is a pure function, which takes two arguments one is current state and
// another one is action. Based on the action which is dispatched, reducer process it
// for that action type and returns the new state.

const initialState = {
  count: 1,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return { ...state };
  }
};

const searchInitialState = {
  searchText: '',
  isSubmitClicked: false,
};

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return { ...state, searchText: action.payload, isSubmitClicked: false };
    case 'SUBMIT_CLICKED':
      return { ...state, isSubmitClicked: true };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: countReducer,
  search: searchReducer,
});

// store: store is an object, which hold the complete data of an application
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

// action: action  is an object, which must have type property,
// it describes what change is happening in state and optionally it has the payload property

// actionCreators: actionCreators are function which return actions
export const incrementCount = (payload) => {
  // action
  return {
    type: INCREMENT,
    payload: payload,
  };
};

export const decrementCount = (payload) => {
  // action
  return {
    type: DECREMENT,
    payload: payload,
  };
};

export const searchText = (payload) => {
  return {
    type: 'ADD_TEXT',
    payload: payload,
  };
};

export const submitClicked = (payload) => {
  return {
    type: 'SUBMIT_CLICKED',
  };
};
