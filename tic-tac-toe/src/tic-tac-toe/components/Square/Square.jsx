import S from './Square.module.css';
import { node } from 'prop-types';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  const isDisabled = !!children;
  return (
    <button className={S.component} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
