/* function saludar (nombre){
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

*/

/* setTimeout(() => {
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
*/

/* try {
    hola()
} catch (error) {
    console.error(error)
} */

/* console.log(1);
setTimeout(() => console.log(2),0);
Promise.resolve().then(() => console.log(3));
console.log(4); */

/* const resolveAfter = () => {
    return new Promise((resolve, reject) => {
        let valor = true;
        setTimeout(() => {
            return (valor) ? resolve("Resuelto") : reject("Rechazado");
        }, 2000);
    });
}

const asyncCall = async () => {
    try{
    console.log("Llamando a la función");
    const result = await resolveAfter();
    console.log(result);
    } catch (error){
        console.error(error);
    }
}

asyncCall(); */

const asyncAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
}

asyncAPI();