import React from 'react';
import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        const { match: { params } } = this.props;

        console.log(params);
    }
    render() {
        return (
            <div className="movie-card">
                <div className="container">

                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg" alt="cover"
                         className="cover"/>

                    <div className="hero">
                        <div className="details">
                            <div className="title1">The Hobbit <span>PG-13</span></div>
                            <span className="likes">109 likes</span>
                        </div>
                    </div>

                    <div className="description">
                        <div className="column1">

                        </div>
                        <div className="column2">
                            <span className="tag">action</span>
                            <span className="tag">fantasy</span>
                            <span className="tag">adventure</span>
                            <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the
                                fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo
                                finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin
                                Oakenshield. Their journey will take them into the Wild; through.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;
