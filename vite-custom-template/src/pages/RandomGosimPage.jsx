import { arrayOf } from 'prop-types';
import Gosim from '@/components/Gosim';
import { GosimType } from '@/@types/globals.d';

RandomGosimPage.propTypes = {
  list: arrayOf(GosimType).isRequired,
};

function RandomGosimPage({ list }) {
  const randomGosim = list[Math.floor(Math.random() * list.length)];

  return (
    <div className="randomGosim">
      <Gosim data={randomGosim} />
    </div>
  );
}

export default RandomGosimPage;
