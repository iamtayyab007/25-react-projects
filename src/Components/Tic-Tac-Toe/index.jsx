import React, { useEffect, useState } from "react";
import "./style.css";

export const TicTacToe = () => {
  const [win, setWin] = useState("");
  const [player, setPlayer] = useState("The Player Turn:");
  const [gameStop, setGameStop] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setGameStop(false);
    setIsXTurn(true);
    setWin("");
  }

  function winningLogin() {
    // Row checks
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== null) {
      setWin(board[0]);
      setGameStop(true);
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[3] !== null
    ) {
      setWin(board[3]);
      setGameStop(true);
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[6] !== null
    ) {
      setWin(board[6]);
      setGameStop(true);
    }
    // Column checks
    else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[0] !== null
    ) {
      setWin(board[0]);
      setGameStop(true);
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[1] !== null
    ) {
      setWin(board[1]);
      setGameStop(true);
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[2] !== null
    ) {
      setWin(board[2]);
      setGameStop(true);
    }
    // Diagonal checks
    else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== null
    ) {
      setWin(board[0]);
      setGameStop(true);
    } else if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[2] !== null
    ) {
      setWin(board[2]);
      setGameStop(true);
    }
    // Check for a draw
    else if (board.every((cell) => cell !== null)) {
      setWin("Draw");
      setGameStop(true);
    }
  }

  useEffect(() => {
    winningLogin();
  }, [board]);

  const handleClick = (index) => {
    if (gameStop || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "0";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="row1">
          <div
            className={`box1 ${win === board[0] ? "active" : "null"}`}
            onClick={() => handleClick(0)}
          >
            {board[0]}
          </div>
          <div
            className={`box2 ${win === board[1] ? "active" : "null"}`}
            onClick={() => handleClick(1)}
          >
            {board[1]}
          </div>
          <div
            className={`box3 ${win === board[2] ? "active" : "null"}`}
            onClick={() => handleClick(2)}
          >
            {board[2]}
          </div>
        </div>
        <div className="row2">
          <div
            className={`box4 ${win === board[3] ? "active" : "null"}`}
            onClick={() => handleClick(3)}
          >
            {board[3]}
          </div>
          <div
            className={`box5 ${win === board[4] ? "active" : "null"}`}
            onClick={() => handleClick(4)}
          >
            {board[4]}
          </div>
          <div
            className={`box6 ${win === board[5] ? "active" : "null"}`}
            onClick={() => handleClick(5)}
          >
            {board[5]}
          </div>
        </div>
        <div className="row3">
          <div
            className={`box7 ${win === board[6] ? "active" : "null"}`}
            onClick={() => handleClick(6)}
          >
            {board[6]}
          </div>
          <div
            className={`box8 ${win === board[7] ? "active" : "null"}`}
            onClick={() => handleClick(7)}
          >
            {board[7]}
          </div>
          <div
            className={`box9 ${win === board[8] ? "active" : "null"}`}
            onClick={() => handleClick(8)}
          >
            {board[8]}
          </div>
        </div>
      </div>
      {gameStop === false ? <h3>{`${player} ${isXTurn ? "X" : "0"}`}</h3> : ""}
      {gameStop && (
        <h3 className={gameStop ? "winner" : ""}>The winner is: {win}</h3>
      )}
      {gameStop && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
};
