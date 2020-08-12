import React from 'react';
import ReactTooltip from 'react-tooltip';
import copy from 'copy-to-clipboard';

export default ({ name }) => {
  const handleCopy = () => {
    copy(window.location.href);
  };

  return (
    <div
      className='edit__header'
      onClick={handleCopy}
      data-tip='link copied to clipboard!'
    >
      <ReactTooltip
        event='click'
        place='top'
        effect='solid'
        afterShow={() => {
          setTimeout(() => ReactTooltip.hide(), 1400);
        }}
        isCapture={true}
      />
      {name}
      <div className='header__copy-anchor'>
        <span className='material-icons'>content_copy</span>
      </div>
    </div>
  );
};
