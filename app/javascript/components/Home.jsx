import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../contexts/GlobalContext';

import Button from './Button';
import Modal from './Modal';
import EditModal from './EditModal';

export default (props) => {
  const { setState } = useContext(GlobalContext);

  const handleCreate = () => {
    const url = '/api/episodes';
    // const token = document.querySelector('meta[name="csrf-token"]').content;
    $.post(url)
      .done(data => {
        const name = data.episode.name;
        props.history.push(`/edit/${name}`)
      })
  }

  const handleEdit = () => {
    setState(prev => ({ ...prev, showModal: true }));
  }

  return (
    <div className='home'>
      <Modal>
        <EditModal />
      </Modal>
      <Link to="" onClick={handleCreate} className="home__btn-link">
        <Button styleName='home__btn'>CREATE EPISODE</Button>
      </Link>
      <Link to="" onClick={handleEdit} className="home__btn-link">
        <Button styleName='home__btn'>EDIT EPISODE</Button>
      </Link>
    </div>
  );
}
