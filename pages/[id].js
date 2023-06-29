import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Phone = () => {
  const [phone, setPhone] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    const res = await fetch(`/api/phones/${id}`);
    const data = await res.json();
    setPhone(data);
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/phones/${id}`, { method: 'DELETE' });

    if (res.status === 204) {
      router.push('/');
    }
  };

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Handphone</h1>
      <p>Brand: {phone.brand}</p>
      <p>Model: {phone.model}</p>
      <p>Price: Rp {phone.price}</p>
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
};

export default Phone;
