import React, { useState } from 'react';

export default ({ jokes }) => {
  return (
    <div className='edit__joke-list'>
      <ul>
        {jokes.map((joke, idx) => (
          <li key={idx}>
            {joke.setup}
            {joke.punchline}
          </li>
        ))}
      </ul>
    </div>
  );
};
