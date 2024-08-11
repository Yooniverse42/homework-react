import S from './Square.module.css';
import { PLAYER } from '@/constants';

function Square() {
  return (
    <div className={S.component}>
      <button>{PLAYER.ONE}</button>
      <button>{PLAYER.TWO}</button>
    </div>
  );
}

export default Square;
