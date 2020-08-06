import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

export default () => {
  return (
    <div className='home'>
      <Link to='/edit' className="home__btn-link">
        <Button styleName='home__btn'>CREATE EPISODE</Button>
      </Link>
      <Link to='/edit' className="home__btn-link">
        <Button styleName='home__btn'>EDIT EPISODE</Button>
      </Link>
    </div>
  );
}
