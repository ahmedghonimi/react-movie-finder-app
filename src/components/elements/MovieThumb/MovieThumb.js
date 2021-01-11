import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom';

const MovieThumb = (props) => {
    console.log(props.movie);
  return (
      <Link to={`/${props.movie.id}`}>
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
                          <span className="minutes">{props.movie.vote_average}</span>
                          <p className="type">Action, Crime</p>
                      </div>
                      <div className="movie_desc">
                          <p className="text">
                              {(props.movie.overview).substr(0, 200)}...
                          </p>
                      </div>
                  </div>
                  <div className="blur_back bright_back" style={{backgroundImage: `url(${props.movieBg})`}}/>
              </div>
          </div>
      </Link>
  )
};

export default MovieThumb;
