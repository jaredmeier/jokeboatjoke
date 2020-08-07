import React, { useState } from 'react';

export default ({ jokes, collapse }) => {
  if (!collapse && jokes.length == 0) {
    return (
      <div style={{marginTop: '20px'}}>No jokes yet</div>
    )
  }

  return (
    <div className={`edit__joke-list ${collapse ? 'collapse' : ''}`}>
      <ul>
        {jokes.map((joke, idx) => (
          <li key={idx}>
            <div className='joke-list__row'>
              <div>📣</div>
              <div>{joke.setup}</div>
              <div>
                <span className='material-icons'>delete</span>
              </div>
            </div>
            <div className='joke-list__row'>
              <div>👊</div>
              <div>{joke.punchline}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
