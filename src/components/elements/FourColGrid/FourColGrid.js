import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {
    const renderMovies = () => {
        let gridElements = props.children.map((elm, index)=>{
            return (
                <div key={index} className="rmdb-gird-element">
                    {elm}
                </div>
            );
        });
        return gridElements;
    }
    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">
                {
                    renderMovies()
                }
            </div>
        </div>
    );
}

export default FourColGrid;
