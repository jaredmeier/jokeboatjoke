import React, { useState } from 'react';

export default ({ setCategories }) => {

  return (
    <div className='form__checkbox-container'>
      <div>
        <input
          type='radio'
          id='things'
          name='categories'
          value='things'
          defaultChecked={true}
          onChange={(e) => setCategories(e.target.value)}
        ></input>
        <label htmlFor='things'>things</label>
      </div>
      <div>
        <input
          type='radio'
          id='person'
          name='categories'
          value='person'
          onChange={(e) => setCategories(e.target.value)}
        ></input>
        <label htmlFor='person'>person</label>
      </div>
      <div>
        <input
          type='radio'
          id='object'
          name='categories'
          value='object'
          onChange={(e) => setCategories(e.target.value)}
        ></input>
        <label htmlFor='object'>object</label>
      </div>
    </div>
  );
};
