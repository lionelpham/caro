import React from 'react';
import propTypes from 'prop-types';
import RowOfSquare from './RowOfSquare';

const Board = ({ squares,onClick,winner }) => {

    const board = squares.map((row,idx) => {
        const k = `v + ${idx}`;
        return (
            <RowOfSquare
                squares = {squares}
                row={row}
                rowIdx={idx}
                onClick = {onClick}
                key={k}
                winner = {winner }
            />
        )
    })
    return (
        <div>
            {board}
        </div>
    );
}

Board.propTypes = {
    squares: propTypes.array.isRequired,
    winner:propTypes.object,
    onClick:propTypes.func.isRequired,
}

export default Board;