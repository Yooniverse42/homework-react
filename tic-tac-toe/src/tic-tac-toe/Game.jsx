import Board from './components/Board/Board';
import S from './Status.module.css';

function Game() {
  return (
    <div className={S.component}>
      <Board />
    </div>
  );
}

export default Game;
