import React, { useState, useEffect } from 'react';

import Button from './Button';

export default () => {
  const [epName, setEpName] = useState('');
  const [buttonEnable, setButtonEnable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buttonEnable) return;
  }

  useEffect(() => {
    if (epName.length > 0) {
      setButtonEnable(true);
    } else setButtonEnable(false);
  }, [epName])

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Episode name"
        value={epName}
        onChange={e => setEpName(e.target.value)}
      >
      </input>
      <Button styleName={`modal__btn-submit ${buttonEnable ? '' : 'disabled'}`} type="submit">
        Edit
      </Button>
    </form>
  )
}
