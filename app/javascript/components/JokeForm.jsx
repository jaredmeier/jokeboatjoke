import React, { useState, useEffect } from 'react';

import Checkboxes from './Checkboxes';
import Button from './Button';
import FormError from './FormError';

export default ({ addJoke }) => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [categories, setCategories] = useState('things');

  const [setupErrors, setSetupErrors] = useState({ length: '', topic: '' });
  const [punchlineErrors, setPunchlineErrors] = useState({ blank: '' });

  const [shake, setShake] = useState(false);
  const [punch, setPunch] = useState(false);

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
    if (validateInput()) {
      setPunchline('');
      setSetup('');
      setPunch(true);
      setTimeout(() => setPunch(false), 500);

      const joke = {
        setup,
        punchline,
        categories
      }

      addJoke(joke);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 160);
    }
  };

  return (
    <>
      <div className={`fist ${punch ? 'punch' : ''}`}>👊</div>
      <form className='edit__form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='setup'
          placeholder="What's the setup? 📣"
          value={setup}
          onChange={e => setSetup(e.target.value)}
        ></input>
        <FormError errors={setupErrors} shake={shake} />
        <input
          type='text'
          name='punchline'
          placeholder="What's the punchline? 👊"
          value={punchline}
          onChange={e => setPunchline(e.target.value)}
        ></input>
        <FormError errors={punchlineErrors} shake={shake} />
        <Checkboxes setCategories={setCategories} />
        <Button type='submit' styleName='form__submit'>
          Submit
        </Button>
        <>
          <small style={{ marginTop: '10px' }}>
            <u>Example</u>
          </small>
          <small>📣 I want to open a store that only sells TOPIC</small>
          <small>👊 and call it BLANK</small>
        </>
      </form>
    </>
  );
};
