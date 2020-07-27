import { useReducer, useCallback } from 'react';

const initialState = {
  modal: null,
  props: {},
};

function reducer(state, action){
  const { type, data } = action;
  switch (type) {
    case 'SET_MODAL':
      return {
        modal: data.modal,
        props: data.props,
      }
    case 'RESET_MODAL':
      return Object.create(initialState);
    default:
      return state;
  }
}

const useModal = () => {
  const [{modal, props}, dispatch] = useReducer(reducer, initialState);

  const handleModal = useCallback((modalName, passedProps = {}) => {
    if(!modalName){
      dispatch({ type: 'RESET_MODAL' });
      return;
    }
    const data = {
      modal: modalName,
      props: passedProps
    };
    dispatch({ type: 'SET_MODAL', data });
  }, []);

  return {
    modal,
    props,
    handleModal,
  }
};

export default useModal;
