import db from '../../../data/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(db.phones);
  } else if (req.method === 'POST') {
    const { brand, model, price } = req.body;
    const newPhone = { id: Date.now().toString(), brand, model, price };
    db.phones.push(newPhone);
    res.status(201).json(newPhone);
  } else {
    res.status(405).end();
  }
}
