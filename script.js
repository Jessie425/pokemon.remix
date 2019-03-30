let request = new XMLHttpRequest();
let url = "https://api.pokemontcg.io/v1/cards?setCode=base1";
request.open("GET", url, true);
request.onload = function(){
    let data = JSON.parse(this.response);
    let pokeList = document.getElementById('pokelist');

    let row = null;
    
    let pokemonCounter = 0;    
    if (request.status >= 200 && request.status < 400) {
        
        data.cards.forEach(pokemon => {
            if (pokemonCounter % 4 == 0) {
                row = document.createElement('div');
                row.className = "row";
                pokeList.appendChild(row);
            }
            
    /* #1 Create a new div or col-3 (we will fit 4 ro a row) */
    let card = document.createElement('div');
    card.className = "col-3 pokemon";
            
    /* #2 Display the pokemon's name */
    // let p = document.createElement('p');
    // p.textContent = pokemon.name;
    
    let img = document.createElement('img');
    console.log(pokemon)
    img.setAttribute('src', pokemon.imageUrl)
            
    /* #3. #4 Append the name to the column div and column to the row */
    card.appendChild(img);
    row.appendChild(card);
    pokemonCounter++;
        
    });
    }
};

request.send();

