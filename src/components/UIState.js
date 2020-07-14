import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UIContext = React.createContext();

const UIProvider = ({ children }) => {
  const [state, setState] = useState({
    sidebar: false,
  });

  const toggleSidebar = () => {
    setState((prevState) => ({ ...prevState, sidebar: !prevState.sidebar }));
  }

  return (
    <UIContext.Provider value={{
      state,
      toggleSidebar,
    }}
    >
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UIProvider, UIContext };
