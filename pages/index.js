import { useState, useEffect } from 'react';

const Index = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/api/phones');
    const data = await res.json();
    setPhones(data);
  };

  return (
    <div>
      <h1>Daftar Handphone</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            {phone.brand} {phone.model} - Rp {phone.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
