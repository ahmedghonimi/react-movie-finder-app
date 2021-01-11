import React from 'react';
import './LoadMoreBtn.css';

const LoadMore = (props) => {
    const loadMore = () =>  {
        props.loadMore();
    }
    return (
        <button onClick={loadMore} className="rmdb-loadmorebtn ">Load More</button>
    )
};

export default LoadMore;
