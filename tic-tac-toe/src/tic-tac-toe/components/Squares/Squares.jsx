import Square from '../Square/Square';
import S from './Squares.module.css';
import { PLAYER } from '@/constants';

function Squares() {
  return (
    <div className={S.component}>
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
}

export default Squares;
