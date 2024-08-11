import Square from '../Square/Square';
import S from './Squares.module.css';
import {
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  checkWinner,
} from '@/constants';
import { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlay = (index) => () => {
    setSquares((prev) => {
      const next = prev.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }
        return square;
      });

      return next;
    });
  };

  const winnerInfo = checkWinner(squares);
  console.log('승자는?', winnerInfo);

  const gameIndex = squares.filter(Boolean).length;

  const currentPlayer =
    gameIndex % PLAYER_COUNT === 0 ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
