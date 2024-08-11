import './styles/main.css';
import S from './Game.module.css';
import Board from './components/Board/Board';

function Game() {
  return (
    <div className={S.component}>
      <Board />
    </div>
  );
}

export default Game;
