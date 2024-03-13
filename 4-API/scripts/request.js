let image = document.querySelector("#poke-image");
let text = document.querySelector("#poke-text");
let input = document.querySelector("#searchbar");
let btn = document.querySelector("#search-btn");


const getData = async () => {
    try {
        let name = input.value;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        let data = await response.json();
        console.log(data);
        text.innerHTML = data.name.toUpperCase();
        image.src = data.sprites.front_default;
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener("click", () => getData());