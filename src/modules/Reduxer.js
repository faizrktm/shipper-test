import React, { useReducer } from 'react';

// Context for reduxer
const ReduxerContext = React.createContext();

// status of dispatch
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 *
 * @param {node} children
 * @param {function} reducer
 * @param {object} initialState
 *
 * Simple state management by implementing reducer hooks and Context API by React.
 * Also a lil bit function composition involved. (when using dispatch(function())) like usual redux activity.
 * How to use:
 * 1. Define ReduxerProvider in a Page level (not globally!) with props reducer and initialState just like redux
 * 2. Use hooks useDispatch to dispatch data (see useDispatch function for detail)
 * 3. use useContext(ReduxerContext) to get loading, data, and also probably dispatch on component level
 */
const ReduxerProvider = ({ children, reducer, initialState }) => {
  // state and dispatcher for certain data
  const [state, dispatch] = useReducer(reducer, initialState);

  // pass data, loading, and dispatch into consumer
  return (
    <ReduxerContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </ReduxerContext.Provider>
  )
}

export {
  ReduxerProvider, ReduxerContext,
}
