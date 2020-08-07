import React, { useContext } from 'react';

import { GlobalContext } from '../contexts/GlobalContext';

export default (props) => {
  const { showModal, setState } = useContext(GlobalContext);

  if (!showModal) return null;

  return (
    <div className='modal-background'
      onClick={() => setState(prev => ({...prev, showModal: false}))}
    >
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
