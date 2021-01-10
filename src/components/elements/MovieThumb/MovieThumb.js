import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
    console.log(props.movie);
  return (
      <div className="rmdb-moviethumb">
          <div className="movie_card" id="bright">
              <div className="info_section">
                  <div className="movie_header">
                      <img
                          className="locandina"
                           src={props.moviePoster}
                          alt={props.moviePoster}
                      />
                      <h1>{props.movie.original_title}</h1>
                      <h4>{props.movie.release_date}, David Ayer</h4>
                      <span className="minutes">117 min</span>
                      <p className="type">Action, Crime, Fantasy</p>
                  </div>
                  <div className="movie_desc">
                      <p className="text">
                          {(props.movie.overview).substr(0, 200)}...
                      </p>
                  </div>
                  <div className="movie_social">
                      <ul>
                          <li><i className="material-icons">share</i></li>
                          <li><i className="material-icons"></i></li>
                          <li><i className="material-icons">chat_bubble</i></li>
                      </ul>
                  </div>
              </div>
              <div className="blur_back bright_back" style={{backgroundImage: `url(${props.movieBg})`}}/>
          </div>
      </div>
  )
};

export default MovieThumb;
