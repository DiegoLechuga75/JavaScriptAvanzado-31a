function saludar (nombre){
    alert("Hola " + nombre);
}

function despedir (nombre){
    alert("Hasta luego " + nombre)
}

function procesarEntradaUsuario(callback){
    let nombre = prompt("Dame tu nombre");
    callback(nombre);
}

procesarEntradaUsuario(despedir);

setTimeout(() => {
    console.log("Han pasado 5 segundos");
    setTimeout(() => {
        console.log("Han pasado 10 segundos");
        setTimeout(() => {
            console.log("Han pasado 15 segundos");
            setTimeout(() => {
                console.log("Han pasado 20 segundos");
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);

