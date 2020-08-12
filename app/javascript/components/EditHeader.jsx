import React, { useState, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default ({ name }) => {
  const displayCopyToast = () => {
    console.log('copied');
  };

  return (
    <div className='edit__header'>
      {name}
      <div className='header__copy-anchor'>
        <ReactTooltip
          event='click'
          place='top'
          effect='solid'
          afterShow={() => {
            setTimeout(() => ReactTooltip.hide(), 1400);
          }}
          isCapture={false}
        />
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => displayCopyToast()}
        >
          <span data-tip='link copied to clipboard!' className='material-icons'>
            content_copy
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}
