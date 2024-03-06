const express = require('express');
const router = express.Router();
// todas las url's de este archivo empiezan con /users 

let allUsers = [];

//  /users/
router.get('/', (req, res) => {
    res.send({ user: 'user name', password: 'password' });
})

//  /users/new
router.get('/new', (req, res) => {
    // res.send('formulario para crear nuevos usuarios');
    // Siempre se va a buscar dentro de views
    res.render('users/new');
})

router.post('/', (req, res) => {
    console.log(req.body);
    allUsers.push(req.body);
    console.log(allUsers);
    res.send('Este es el res.send de routes/users.js');
})

//  /users/1
//  /users/100
//  /users/:id
router.get('/:id', (req, res) => {
    console.log(req.params);
    const userId = req.params.id;
    res.send(`Esta la infomacion del usuario ${userId}`);
})


module.exports = router;