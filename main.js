

async function fetchData () {
    const pokemonName = document.getElementById('input-field').value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (response.ok) {
            const jsonResponse = await response.json();

            const image = jsonResponse.sprites.front_default;
            const spriteElement = document.getElementById("pokemon-sprite");
            const listContainer = document.getElementById("list-container");
            const baseHealth = jsonResponse.stats[0].base_stat;
            const elementType = jsonResponse.types[0].type.name;
            const baseAttack = jsonResponse.stats[1].base_stat;
            const baseDefense = jsonResponse.stats[2].base_stat;
            const baseMagicAttack = jsonResponse.stats[3].base_stat;
            const baseMagicDefense = jsonResponse.stats[4].base_stat;
            const baseSpeed = jsonResponse.stats[5].base_stat;
            const weight = jsonResponse.weight;

            spriteElement.src = image;
            spriteElement.style.display = "block";
            listContainer.style.display = "flex";
            
            document.getElementById('element-type').innerHTML = `Type: ${elementType}`
            document.getElementById('baseHP').innerHTML = `Hit Points: ${baseHealth}`
            document.getElementById('base-attack').innerHTML = `Attack: ${baseAttack}`
            document.getElementById('base-defense').innerHTML = `Defense: ${baseDefense}`
            document.getElementById('base-magic-attack').innerHTML = `Magic Attack: ${baseMagicAttack}`
            document.getElementById('base-magic-defense').innerHTML = `Magic Defense: ${baseMagicDefense}`
            document.getElementById('base-speed').innerHTML = `Speed: ${baseSpeed}`
            document.getElementById('weight').innerHTML = `Weight: ${weight}lb`
        }
    }

    catch (error) {
        console.log(error)
    }
}


const button = document.getElementById('fetch-button');

button.addEventListener('click', fetchData);

