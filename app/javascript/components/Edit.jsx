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

  const addJoke = (joke) => {
    console.log(joke);
  }

  return (
    <div className='edit'>
      <JokeForm addJoke={addJoke}/>
      <Button handler={() => toggleSeeAll(prev => !prev)}>
        {seeAll ? 'Hide' : 'See'} All Episode Jokes
      </Button>
      {seeAll && <JokeList jokes={jokes}/>}
    </div>
  );
};
