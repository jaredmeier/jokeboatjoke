import React, { useState, useEffect } from 'react';

import JokeForm from './JokeForm';
import Button from './Button';
import JokeList from './JokeList';

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

  return (
    <div className='edit'>
      <JokeForm addJoke={addJoke}/>
      <Button
        handler={(e) => {
          e.target.blur();
          toggleSeeAll(prev => !prev);
        }}
        styleName='edit__btn-toggle-jokes'>
        {seeAll ? 'Hide' : 'See'} All Episode Jokes
      </Button>
      {seeAll && <JokeList jokes={jokes}/>}
    </div>
  );
};
