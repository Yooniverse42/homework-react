import S from './Square.module.css';
import { node, func } from 'prop-types';

Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay, ...restProps }) {
  const isDisabled = !!children;
  return (
    <button
      className={S.component}
      onClick={onPlay}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Square;
