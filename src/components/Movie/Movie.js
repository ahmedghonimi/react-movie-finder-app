import React from 'react';
import './Movie.css';
import axios from "axios";
import {BASE_URL, API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../config';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: [],

        };
    }

    componentDidMount () {
        const { match: { params } } = this.props;

        console.log(`${API_URL}movie/${params.movieId}?api_key=${API_KEY}`);

        axios.get(`${API_URL}movie/${params.movieId}?api_key=${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                let selectedMovie = response.data;
                this.setState({
                    selectedMovie
                })
            })
            .catch((error) => {
               console.log(error);
            });
    }

    render() {
        let genres = this.state.selectedMovie.genres;
        return (
            <div className="movie-card">
                <div className="container">

                    <img src={`${IMAGE_BASE_URL}w200${this.state.selectedMovie.poster_path}`} alt="cover"
                         className="cover"/>

                    <div className="hero" style={{backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.selectedMovie.backdrop_path})`}}>
                        <div className="details">
                            <div className="title1">{this.state.selectedMovie.title} <span>{this.state.selectedMovie.vote_average}</span></div>
                            <span className="likes">{this.state.selectedMovie.popularity} likes</span>
                        </div>
                    </div>

                    <div className="description">
                        <div className="column1" />
                        <div className="column2">

                            <p>
                                { this.state.selectedMovie.overview }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;
