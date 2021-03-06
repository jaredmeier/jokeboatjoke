import React, { useState, useEffect } from 'react';

import EditHeader from './EditHeader';
import JokeForm from './JokeForm';
import Button from './Button';
import JokeList from './JokeList';
import Download from './Download';

export default props => {
  const [seeAll, toggleSeeAll] = useState(false);
  const [jokes, setJokes] = useState([]);

  const { name } = props.match.params;

  useEffect(() => {
    const url = `/api/episodes/${name}`;
    $.get(url)
      .done(({ jokes }) => {
        setJokes(jokes);
        console.log(jokes);
      })
  }, []);

  const addJoke = (newJoke) => {
    const url = `/api/episodes/${name}/jokes`;

    $.post(url, { joke: newJoke }).done(data => {
      setJokes(prev => [data, ...prev]);
    });
  }

  const deleteJoke = (id) => {
    const url = `/api/episodes/${name}/jokes/${id}`;
    $.ajax({
      type: 'DELETE',
      url: url,
    })
    .done(() => {
      setJokes(prev => prev.filter(joke => joke.id !== id));
    })
  }

  return (
    <div className='edit'>
      <EditHeader name={name}/>
      <JokeForm addJoke={addJoke} />
      <div className='edit__btn-container'>
        <Button
          handler={e => {
            e.target.blur();
            toggleSeeAll(prev => !prev);
          }}
          styleName='edit__btn-toggle-jokes'
        >
          {seeAll ? 'Hide' : 'See All'} Episode Jokes
        </Button>
        <Download data={jokes} />
      </div>
      <JokeList jokes={jokes} collapse={!seeAll} deleteJoke={deleteJoke} />
    </div>
  );
};
