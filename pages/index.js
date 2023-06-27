import axios from 'axios';

export default function Home({ hps }) {
  return (
    <div>
      <h1>Toko HP</h1>
      <ul>
        {hps.map(hp => (
          <li key={hp.id}>
            <h2>{hp.nama}</h2>
            <p>Merek: {hp.merek}</p>
            <p>Harga: {hp.harga}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:8000/api/hps');
  const hps = response.data;

  return {
    props: { hps }
  };
}
