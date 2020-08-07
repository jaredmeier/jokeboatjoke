import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../contexts/GlobalContext';

export default (props) => {
  const { showModal, setState } = useContext(GlobalContext);

  const handleCloseModal = () => {
    // console.log('changing state');
    setState(prev => ({ ...prev, showModal: false }));
  }

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.keyCode !== 27) return;
      handleCloseModal();

      return document.removeEventListener('keydown', handleCloseModal);
    });
  }, []);

  if (!showModal) return null;

  return (
    <div
      className='modal-background'
      onClick={() => setState(prev => ({ ...prev, showModal: false }))}
    >
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
