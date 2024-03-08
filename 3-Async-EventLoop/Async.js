const resolveAfter = () => {
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

asyncCall();


const asyncAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json);
}

asyncAPI();
