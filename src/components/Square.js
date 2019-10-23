import React from 'react';
import PropTypes from 'prop-types';

const Square = ({onClick,win,value}) => {
    
    return (win) ? (
        <button className="square square-highlight" type="button" onClick={onClick}>
            {value}
        </button>
        ) : (
        <button className="square" type="button" onClick = {onClick}>
            {value}
        </button>
        ) ;
} 

Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    win: PropTypes.bool.isRequired,
    value: PropTypes.string
}

export default Square;