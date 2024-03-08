const fs = require('node:fs');
const path = require('node:path');
const pc = require('picocolors');
const directory = process.argv[2] ?? '.';

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

            console.log(`${pc.green(fileType)} ${pc.blue(filePath.padEnd(30))} ${fileSize.padStart(10)} ${pc.bgMagenta(modifiedDate)}`);
        });
    });
})


