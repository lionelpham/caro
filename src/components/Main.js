import React from 'react';
import '../App.css';
import Board from './Board';

const nSquareToWin = 5;
function checkWinner(squares){
    let win;
    let isEmpty = true;

    if (!squares) return null;
    for (let i = 0; i < squares.length; i+=1) {
        for (let j = 0; j < squares[i].length; j+=1) {
        if (!squares[i][j]) {
            isEmpty = true;
        }
        else {
            isEmpty = false;
        }
        if(isEmpty === false){
            if (j <= squares[i].length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i][j + k] !== squares[i][j + k + 1]) {
                        win = false
                    }
                }
                if (win)
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToRight'};
                }
            }
            if (i <= squares.length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j] !== squares[i + k + 1][j]) {
                        win = false
                    }
                }
                if (win) 
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToDown'};
                }
            }
            if (j <= squares[i].length - nSquareToWin && i <= squares.length - nSquareToWin) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j + k] !== squares[i + k + 1][j + k + 1]) {
                        win = false
                    }
                }
                if (win) 
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToRightDown'};
                }
            }
            if (i <= squares.length - nSquareToWin && j >= nSquareToWin - 1) {
                win = true;
                for (let k = 0; k < nSquareToWin - 1; k+=1) {
                    if (squares[i + k][j - k] !== squares[i + k + 1][j - k - 1]) {
                        win = false
                    }
                }
                if (win)
                {
                    
                    return {val: squares[i][j], x: j, y: i, direction: 'ToLeftDown'};
                }
            }
        }
        }
    }
    return null;
}

const Main = ({ p_width, p_height, p_history, p_step, p_xIsNext, p_isDes,
    p_changeStep, p_toggleXIsNext, p_clickSquare, p_sortMoves })=>{
    const jumpTo = (step) => {
        p_changeStep(step);
    }
    const handleClick = (i,j) => {
        const histories = p_history.slice(0,p_step+1);
        const current = histories[p_step];
        console.log(current);
        const squares = current.squares.slice();

        squares.map((row,idx)=>{
            squares[idx] = squares[idx].slice();
            return true;
        })
        
        // if exist value 
        if(squares[i][j] || checkWinner(squares)){
            return;
        }
        
        squares[i][j] = p_xIsNext ? 'X' : 'O';
        
            p_clickSquare(histories.concat([{
                squares,
                location: {x: i, y: j}
            }]));
    }

    const sortBy = () => {
        p_sortMoves(!p_isDes)
    }

    const history = p_history;
    const current = history[p_step];
    const winCheck = checkWinner(current.squares);
    let moves = history.map((step, move) => {
        const desc = move ?
            `Step #  ${move}   Location (  ${step.location.x}  ,  ${step.location.y}  ) `:
            ` Reset Game`;

        return (p_step === move) ? (
            <li key = {move.toString()}>
                <button type="button" className="btn btn-info" onClick={() =>{this.jumpTo(move);}}>{desc}</button>
            </li>
        ) : (
            <li key={move.toString()}>
            <button type ="button" className="btn btn-dark"onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
        );
    });
    if (!p_isDes) {
        moves = moves.reverse();
    }
    let status = null;
    const arrow =p_isDes ? '↓' : '↑'
    if(winCheck){
        status = `Winner:  ${winCheck.val}`;

    } else {
        status = `Next player: ${(p_xIsNext ? 'X' : 'O')}`;
    }
    return (
        <div>
            <div className="status text-center text-primary">
                {status}
            </div>
            
            <div className="main-content">
                <div className="game">
                    <div className="game-board shadow">
                        <Board
                            squares = {current.squares}
                            onClick={(i,j)=> handleClick(i,j)}
                            winner = {winCheck}
                        />
                    </div>
                    <div className="game-info">
                    <div>
                        <button className="btn btn-success" type="button" onClick={sortBy}>Step {arrow}</button>
                        </div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Main;
// ================================

