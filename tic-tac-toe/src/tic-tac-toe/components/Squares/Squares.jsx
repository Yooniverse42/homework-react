import Square from '../Square/Square';
import S from './Squares.module.css';
import {
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  checkWinner,
  WINNERS_COLOR,
  PLAYER_LIST,
} from '@/constants';
import { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlay = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');

      return;
    }

    setSquares((prev) => {
      const next = prev.map((square, squareIndex) => {
        return squareIndex === index ? currentPlayer : square;
      });

      return next;
    });
  };

  const winnerInfo = checkWinner(squares);

  const gameIndex = squares.filter(Boolean).length;

  const currentPlayer =
    gameIndex % PLAYER_COUNT === 0 ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
