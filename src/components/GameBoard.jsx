// import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const GameBoard = ({ onSelectSquare, turns }) => {

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    
    gameBoard[row][col] = player;
  }

  // const [gameboard, setGameboard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameboard((previousGameBoard) => {
  //     const updatedBoard = [...previousGameBoard]
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex)=> <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
              {playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  )
}

export default GameBoard