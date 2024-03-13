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
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

asyncAPI();
