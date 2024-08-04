import { GosimType } from '@/@types/globals.d';

Gosim.propTypes = {
  data: GosimType.isRequired,
};

function Gosim({ data }) {
  const { name, photo, desc } = data;

  const label = `${name} (${desc})`;

  return (
    <figure className="Gosim" aria-label={label}>
      <a href={`/assets/${photo}`} download={name}>
        <img src={`/assets/${photo}`} alt={desc} />
      </a>
      <figcaption>
        <p>{desc}</p>
      </figcaption>
    </figure>
  );
}

export default Gosim;
