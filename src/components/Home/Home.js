import React from 'react';
import './Home.css';
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import LoadMore from "../elements/LoadMore/LoadMore";
import Spinner from "../elements/Spinner/Spinner";
import {API_KEY, API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../../config";

import axios from 'axios';
import MovieThumb from "../elements/MovieThumb/MovieThumb";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            heroImg: null,
            loading: false,
            currentPage: 0,
            totalPages: 0,
            searchTerm: ''
        };

        this.searchMovies = this.searchMovies.bind(this);
        this.loadMoreMovies = this.loadMoreMovies.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        // get most popular movies
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchMovies(endpoint);
    }

    // fetch movies from api
    fetchMovies(endpoint) {
        axios.get(endpoint).then((response) =>{
            //console.log(response);
            const movies = response.data.results;

            this.setState({
                movies: [...this.state.movies, ...movies],
                loading: false,
                heroImg: this.state.heroImg || response.data.results[Math.floor(Math.random() * 20 ) + 1], // 0.1 => 0 +1
                currentPage: response.data.page,
                totalPages: response.data.total_pages
            });

            //console.log(this.state);
        }).catch(error => {
            console.log(error);
        })
    }

    // Load More Movies
    loadMoreMovies() {
        let endpoint = '';
        this.setState({loading: true});
        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }

        this.fetchMovies(endpoint);
    }

    // Search for Movies
    searchMovies(searchTerm) {
        console.log(searchTerm);
        let endpoint = '';

        this.setState({
            loading: true,
            movies: [],
            searchTerm: searchTerm
        });

        if(searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }

        this.fetchMovies(endpoint);
    }

    render() {
        const {heroImg, loading, searchTerm, movies} = this.state;
        return (
            <div className="rmdb-home">
                {
                    heroImg ?
                        <div>
                            <HeroImage
                                title={heroImg.original_title}
                                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImg.backdrop_path}`}
                                description={heroImg.overview}
                            />
                            <SearchBar callback={this.searchMovies} />
                        </div>
                    : null
                }

                <div className="rmdb-home-grid">
                    <FourColGrid
                        header={searchTerm ? 'Search Results: ' : 'Popular Movies: '}
                        loading={loading}
                    >
                        {
                            movies.map((movie, index) => {
                                return (
                                    <MovieThumb
                                        key={index}
                                        clickable={true}
                                        // add a blank image if there's no path for the movie poster image
                                        moviePoster={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : 'images/no_image.jpg'}
                                        movieBg={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                                        movie={movie}
                                    />
                                )
                            })
                        }
                    </FourColGrid>
                </div>
                <Spinner loading={loading} />
                <LoadMore loadMore={this.loadMoreMovies} />
            </div>
        )
    }
}
