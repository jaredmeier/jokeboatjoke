import React, { useState, useEffect } from 'react';

import Button from './Button';
import FormError from './FormError';

export default () => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [setupErrors, setSetupErrors] = useState({ length: '', topic: '' });
  const [punchlineErrors, setPunchlineErrors] = useState({blank: ''});

  useEffect(() => {
    validateInput();
  }, [setup, punchline]);

  const validateInput = () => {
    // refactor below
    //
    //
    
    let valid = true;

    if (setup.length < 1) {
      valid = false;
      setSetupErrors(prevSetupErrors => ({
        ...prevSetupErrors,
        length: "Setup can't be blank!",
      }));
    } else {
      setSetupErrors(prevSetupErrors => ({
        ...prevSetupErrors,
        length: '',
      }));
    };

    if (!setup.includes('TOPIC')) {
      valid = false;
      setSetupErrors(prevSetupErrors => ({
        ...prevSetupErrors,
        topic: "Must include keyword TOPIC!",
      }));
    } else {
      setSetupErrors(prevSetupErrors => ({
        ...prevSetupErrors,
        topic: '',
      }));
    };

    if (!punchline.includes('BLANK')) {
      valid = false;
      setPunchlineErrors(prevPunchlineErrors => ({
        ...prevPunchlineErrors,
        blank: 'Must include keyword BLANK!',
      }));
    } else {
      setPunchlineErrors(prevPunchlineErrors => ({
        ...prevPunchlineErrors,
        blank: '',
      }));
    };

    return valid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateInput()) console.log('Valid, good');
  };

  return (
    <form className='edit__form'>
      <input
        type='text'
        name='setup'
        placeholder="What's the setup?"
        value={setup}
        onChange={e => setSetup(e.target.value)}
      ></input>
      <FormError errors={setupErrors} />
      <input
        type='text'
        name='punchline'
        placeholder="What's the punchline?"
        value={punchline}
        onChange={e => setPunchline(e.target.value)}
      ></input>
      <FormError errors={punchlineErrors} />
      <Button type='submit' styleName='form__submit' handler={handleSubmit}>
        Submit
      </Button>
      <small>Example</small>
      <small>SETUP: I want to open a store that only sells TOPIC</small>
      <small>PUNCHLINE: and call it BLANK</small>
    </form>
  );
};
