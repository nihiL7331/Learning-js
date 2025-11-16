import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

var users = [
  {
    first_name: 'Maciej',
    last_name: 'Paluszynski',
    email: 'mpal@uni.wroc.pl',
  },
  {
    first_name: 'Bartosz',
    last_name: 'Bednarczyk',
    email: 'bbe@uni.wroc.pl',
  },
];

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} deleted from db`);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body; //to sie wydaje jakies unscalable 

  const user = users.find((user) => user.id === id);

  if(first_name) user.first_name = first_name;
  if(last_name) user.last_name = last_name;
  if(email) user.email = email;

  res.send(`User ${id} updated`);
});

export default router
