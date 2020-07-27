import React from 'react';

import Container from './Container';

const AddDriver = React.lazy(() => import('./AddDriver'));

const Switcher = ({ modal, ...rest }) => {
  switch (modal) {
    case 'add-driver':
      return <AddDriver {...rest} />;
    default:
      return null;
  }
};

export default Container(Switcher);
