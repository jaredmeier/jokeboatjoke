import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

export default (props) => {
  const handleCreate = () => {
    const url = '/api/episodes';
    const token = document.querySelector('meta[name="csrf-token"]').content;
    $.post(url)
      .done(data => {
        const name = data.episode.name;
        props.history.push(`/edit/${name}`)
      })
  }

  return (
    <div className='home'>
      <Link to="" onClick={handleCreate} className="home__btn-link">
        <Button styleName='home__btn'>CREATE EPISODE</Button>
      </Link>
      <Link to='/edit' className="home__btn-link">
        <Button styleName='home__btn'>EDIT EPISODE</Button>
      </Link>
    </div>
  );
}
