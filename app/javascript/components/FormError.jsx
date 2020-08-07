import React from 'react';

export default ({ errors, shake }) => {
  return (
    <small className={`form__error ${shake ? 'shake' : ''}`}>
      {Object.values(errors).map((error, idx) => (
        <React.Fragment key={idx}>{error} </React.Fragment>
      ))}
    </small>
  );
};
