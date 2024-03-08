/* try {
    hola()
} catch (error) {
    console.error(error)
}
*/


console.log(1);
console.log(2);
console.log(3);

console.log("----------------------------------");

console.log(1);
setTimeout(() => console.log(2),3000);
console.log(3);

console.log("----------------------------------");

console.log(1);
setTimeout(() => console.log(2),0);
console.log(3);

console.log("----------------------------------");

console.log(1);
setTimeout(() => console.log(2),0);
Promise.resolve().then(() => console.log(3));
console.log(4);

