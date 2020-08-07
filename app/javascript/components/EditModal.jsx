import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import Button from './Button';
import FormError from './FormError';

import { GlobalContext } from '../contexts/GlobalContext';

const EditModal = props => {
  const [epName, setEpName] = useState('');
  const [buttonEnable, setButtonEnable] = useState(false);
  const [formErrors, setFormErrors] = useState({ error: '' });
  const { _, setState } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!buttonEnable) return;

    const url = `/api/episodes/${epName}`;
    $.get(url)
      .done(() => {
        setState(prev => ({ ...prev, showModal: false }));
        props.history.push(`/edit/${epName}`);
      })
      .fail(() => {
        setFormErrors(prev => ({
          ...prev,
          error: "Episode not found!",
        }));
      });
  };

  useEffect(() => {
    if (epName.length > 0) {
      setButtonEnable(true);
    } else setButtonEnable(false);
  }, [epName]);

  return (
    <form className='modal__form' onSubmit={handleSubmit}>
      <input
        name='name'
        placeholder='Episode name'
        value={epName}
        onChange={e => {
          setEpName(e.target.value);
          setFormErrors('');
        }}
      ></input>
      <FormError errors={formErrors} />
      <Button
        styleName={`modal__btn-submit ${buttonEnable ? '' : 'disabled'}`}
        type='submit'
      >
        Edit
      </Button>
    </form>
  );
};

export default withRouter(EditModal);
