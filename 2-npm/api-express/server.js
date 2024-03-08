const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// localhost:3000/
app.get('/', (req, res) => {
    // Pa' probar
    // res.send('Hola Mundo usando Nodemon');
    res.render('index', { text: 'Este es texto desde Server.js' });
});

// localhost:3000/contacto
app.get('/contacto', (req, res) => {
    res.send('Página de contacto');
})

// localhost:3000/perfil
app.get('/perfil', (req, res) => {
    res.send('Página de perfil');
})


/* 
localhost:3000/users
localhost:3000/users/new
localhost:3000/users/5 
localhost:3000/users/10 

app.get('/users', (req, res) => {
    res.send('lista de usuarios');
});

app.get('/users/new', (req, res) => {
    res.send('formulario para registar ususarios');
});
*/

const usersRoutes = require('./routes/users.js');
app.use('/users', usersRoutes);

// Para uso de página estáticas
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App escuchando en el puerto ${PORT}`);
})