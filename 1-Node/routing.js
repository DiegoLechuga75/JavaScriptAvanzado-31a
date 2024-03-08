const http = require('node:http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    // localhost:3000/
    console.log(req.url);
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    if (req.url === '/') {
        res.end(`
            <h1>Este es el INICIO</h1>
            <ul>
                <li><a href="/contacto">Contáctanos</a></li>
                <li><a href="/perfil">Mi perfil</a></li>
            </ul>
            `);

    } else if (req.url === '/contacto') {
        res.end(`
            <h1>Este es la pagina de contacto</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/perfil">Mi perfil</a></li>
            </ul>
            `);
    } else if (req.url === '/perfil') {
        res.end(`
            <h1>Este es la pagina de perfil</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/contacto">Contáctanos</a></li>
            </ul>
            `);
    }
    else {
        res.statusCode = 404;
        res.end(`<h1>Este página todavía no la construimos 👷‍♂️</h1>`)
    }
})

server.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})