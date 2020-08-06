import React from 'react';

export default props => {
  return (
    <button className={'' + (props.styleName || '')}>{props.children}</button>
  );
};
