import React from 'react';

export default ({ errors }) => {
  return (
    <small className="form__error">
      {Object.values(errors).map((error, idx) => (
        <React.Fragment key={idx}>{error} </React.Fragment>
      ))}
    </small>
  );
};
