import React from 'react';

import './video-list.css';

function VideoList({ movies, handleClick }) {
  return(
    <div className="video-list">
        {movies.map((elem, index) => (
            <div key={`move-${index}`}>
            <h3>
                <a href="#" onClick={(event) => handleClick(event, elem)}>
                    {elem.title}
                </a>
            </h3>
            <p>{elem.description}</p>
        </div>
        ))}
    </div>
  )
}

export default VideoList;