const characters = () => {
  const container = document.querySelector(".container");

  function fetchCharacters() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((el) => {
          const card = document.createElement("div");
          card.classList.add("card");

          const name = document.createElement("p");
          name.textContent = `Name:${el.name}`;

          const house = document.createElement("p");
          house.textContent = `House:${el.house}`;

          const img = document.createElement("img");
          img.setAttribute("src", el.image);

          const actor = document.createElement("p");
          actor.textContent = `Actor:${el.actor}`;

          container.appendChild(card);
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(house);
          card.appendChild(actor);
        });
      });
  }

  fetchCharacters();
};

export default characters;
