import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onSearch = this.onSearch.bind(this);
        this.timeout = null;
    }

    onSearch(event) {
        this.setState({
            value: event.target.value
        });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        }, 100);

        // this.props.searchMovies(this.state.value);
    }

    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <input
                        type="text"
                        placeholder="Search.."
                        onChange={this.onSearch}
                        value={this.state.value}
                        className="rmdb-searchbar-input"
                     />
                </div>
            </div>
        )
    }
};

export default SearchBar;
