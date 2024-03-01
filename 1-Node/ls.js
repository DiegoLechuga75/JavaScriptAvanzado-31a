// globalThis es global em node y window en el navegador
// console.log(globalThis);

// const fs = require('node:fs');

/* fs.readdir('./akbsdhxb', (err, files) => {
    if (err) {
        console.error('❌ No se pudo leer este directorio');
    }
    files.forEach(file => console.log(file));
}); */

// console.log(process.cwd());
// Salimos del proceso con un error
// process.exit(1);
// Salimos del proceso de manera exitos
// process.exit(0);
// console.log(process.argv);

const { ChildProcess } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2] ?? '.';
// node test.js ../repo-clases
// node test.js ../repo-alumnos
// node test.js ./carpeta-1

// Callback hell
fs.readdir(directory, (err, files) => {
    if (err) {
        console.log('❌ No se pudo leer este directorio');
        process.exit(1);
    }
    files.forEach(file => {
        const filePath = path.join(directory, file);
        // console.log(filePath)
        fs.stat(filePath, (err, stat) => {
            if (err) {
                console.log('❌ No se pudo leer el archivo/directorio');
                process.exit(1);
            }
            const isDirectory = stat.isDirectory();
            const fileType = isDirectory ? 'd' : 'a';
            const fileSize = stat.size.toString();
            const modifiedDate = stat.mtime.toLocaleDateString();

            console.log(`${fileType} ${filePath.padEnd(30)} ${fileSize.padStart(10)} ${modifiedDate}`);
        });
    });
})


