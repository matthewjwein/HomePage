import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './TicTacToe.css';

interface SquareProps {
    value: string;
    borderClassName: string;
    onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, borderClassName, onSquareClick }) => {
    return (
        <button className={`square ${borderClassName}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}

interface BoardProps {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Current player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square borderClassName="square-border-bottom square-border-right" value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square borderClassName="square-border-left square-border-bottom square-border-right" value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square borderClassName="square-border-bottom square-border-left" value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square borderClassName="square-border-bottom square-border-top square-border-right" value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square borderClassName="square-border-all" value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square borderClassName="square-border-bottom square-border-top square-border-left" value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square borderClassName="square-border-top square-border-right" value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square borderClassName="square-border-left square-border-right square-border-top" value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square borderClassName="square-border-left square-border-top" value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

const TicTacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: string[]) {
        setGameStarted(true);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((_, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <Card className="game-info">
                <Card.Body>
                    <Card.Title>Game Info</Card.Title>
                    <Card.Text>
                        {gameStarted ? <ol>{moves}</ol> : "Click or tap on a square to start playing"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;