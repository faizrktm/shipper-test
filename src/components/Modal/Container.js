import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Close } from 'grommet-icons';
import { breakpoint } from 'styled-components-breakpoint';

const Container = (ModalComponent) => ({ modal, handleModal, ...rest }) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent tabIndex="-1">
        <ModalHeader>
          <h2>{modal.replace(/-/g, ' ')}</h2>
          <button onClick={() => handleModal()}>
            <Close color="#000" size="1rem" />
          </button>
        </ModalHeader>
        <ModalBody>
          <Suspense fallback={<div>Loading...</div>}>
            <ModalComponent
              modal={modal}
              {...rest}
              dismissModal={handleModal}
            />
          </Suspense>
        </ModalBody>
      </ModalContent>
    </ModalContainer>,
    document.getElementById('modal')
  );
};

export default Container;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ModalContent = styled.div`
  overflow-y: scroll;
  background-color: white;
  border-radius: 8px;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;

  ${breakpoint('tablet')`
    max-height: 95vh;
    min-height: 50vh;
    min-width: 50vw;
    max-width: 80vw;
  `}

  ${breakpoint('desktop')`
    max-height: 95vh;
    min-height: 50vh;
    min-width: 40vw;
    max-width: 80vw;
  `}
`;

const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  > h2 {
    text-transform: capitalize;
  }
`;

const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
`;
