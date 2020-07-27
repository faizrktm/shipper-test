import { useContext } from 'react';
import { ReduxerContext } from './Reduxer';

/**
 * Custom useDispatch
 * Take dispatcher from ReduxerContext
 * Inside custom dispatch, check if parameter is function or object
 * 1. if function, execute with passing dispatcher and current state
 * 2. if object, it indicates direct manipulation like {type: REQUEST} etc
 *    and invoke dispatcher immediately
 */
const useDispatch = () => {
  const { dispatch: dispatcher, state } = useContext(ReduxerContext);

  const dispatch = (prop) => {
    if (typeof prop === 'function') {
      return prop.call(this, dispatcher, state);
    } else if (typeof prop === 'object') {
      return dispatcher(prop);
    }
  };

  return dispatch;
};

export default useDispatch;
