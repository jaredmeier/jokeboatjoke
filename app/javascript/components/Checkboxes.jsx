import React, { useState } from 'react';

export default () => {

  return (
    <div className='form__checkbox-container'>
      <div>
        <input
          type='radio'
          id='things'
          name='category'
          value='things'
          defaultChecked={true}
        ></input>
        <label htmlFor='things'>things</label>
      </div>
      <div>
        <input
          type='radio'
          id='person'
          name='category'
          value='person'
        ></input>
        <label htmlFor='person'>person</label>
      </div>
      <div>
        <input
          type='radio'
          id='object'
          name='category'
          value='object'
        ></input>
        <label htmlFor='object'>object</label>
      </div>
    </div>
  );
};
