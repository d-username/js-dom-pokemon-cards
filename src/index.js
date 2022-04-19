// index.js
const cardlistUL = document.getElementById("card-list");
for (let i = 0; i < data.length; i++) {
  console.log("Pokemon at i", data[i]);
  const pokemon = data[i];

  // add li to ul
  const cardLI = document.createElement("li");
  cardLI.setAttribute("class", "card");
  cardlistUL.append(cardLI); // add at end of list

  // create an h2
  const cardH2 = document.createElement("h2");
  // set the text to pokemon name
  cardH2.innerHTML = pokemon.name;
  // add h2 to li
  cardLI.append(cardH2);

  // add img
  const cardIMG = document.createElement("img");
  // add class to img
  cardIMG.setAttribute("class", "card--img");
  cardIMG.width = "256";
  cardIMG.src = pokemon.sprites.other["official-artwork"].front_default;
  // append img to li
  cardLI.append(cardIMG);

  //add another ul to the cardLI and also create the stats LI items
  const statsUL = document.createElement("ul");
  statsUL.setAttribute("class", "card--text");

  for (let i = 0; i < pokemon.stats.length; i++) {
    //create
    const statLI = document.createElement("li");
    //set
    statLI.innerHTML =
      pokemon.stats[i].stat.name + ": " + pokemon.stats[i].base_stat;
    //add
    statsUL.append(statLI);
  }

  //   //append ul to the cardLI
  cardLI.append(statsUL);
}
