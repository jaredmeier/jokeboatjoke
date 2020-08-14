import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const url = '/api/episodes/';
    $.get(url).done(episodes => {
      setEpisodes(episodes);
      console.log(episodes);
    });
  }, []);

  return (
    <div className="recent-episodes">
      Recently Updated Episodes
      <ul>
        {episodes.map((episode, idx) => (
          <li key={idx}>
            <Link to={`/edit/${episode.name}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
