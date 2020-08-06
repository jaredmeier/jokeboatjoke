import React from 'react';

export default props => {
  const handler = () => null;

  return (
    <button
      type={props.type || 'button'}
      className={'' + (props.styleName || '')}
      onClick={props.handler || handler}
    >
      {props.children}
    </button>
  );
};
