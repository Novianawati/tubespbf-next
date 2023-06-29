import { useState } from 'react';
import { useRouter } from 'next/router';

const New = () => {
  const [form, setForm] = useState({ brand: '', model: '', price: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/phones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.status === 201) {
      router.push('/');
    }
  };

  return (
    <div>
      <h1>Tambah Handphone Baru</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={form.model}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default New;
