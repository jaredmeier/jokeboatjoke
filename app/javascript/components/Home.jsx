import React from 'react';

import Button from './Button';

export default () => {
  return (
    <div className='home'>
      <Button styleName='home__btn'>CREATE EPISODE</Button>
      <Button styleName='home__btn'>EDIT EPISODE</Button>
    </div>
  );
}
