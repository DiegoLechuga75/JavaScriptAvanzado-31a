fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

const asyncAPI = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

asyncAPI();