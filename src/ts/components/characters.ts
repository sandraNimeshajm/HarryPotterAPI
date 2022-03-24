const characters = () => {
  const container = document.querySelector(".container");

  function fetchCharacters() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((person) => {
          const card = document.createElement("div");
          card.classList.add("card");

          const name = document.createElement("p");
          name.innerHTML = `<span>Name</span>: ${person.name}`;

          const gender = document.createElement("p");
          gender.innerHTML = `<span>Gender</span>: ${person.gender}`;

          const house = document.createElement("p");
          person.house
            ? (house.innerHTML = `<span>House</span>: ${person.house}`)
            : (house.innerHTML = `<span>House</span>: Unknown`);

          const img = document.createElement("img");

          person.image
            ? img.setAttribute("src", person.image)
            : img.setAttribute("src", "./src/images/no-img.png");

          const actor = document.createElement("p");

          if (person.gender === "male") {
            actor.innerHTML = `<span>Actor</span>: ${person.actor}`;
          }

          if (person.gender === "female") {
            actor.innerHTML = `<span>Actress</span>: ${person.actor}`;
          }

          if (person.actor === "") {
            actor.innerHTML = `<span>Actress</span>: Unknown`;
          }

          container.appendChild(card);
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(gender);
          card.appendChild(house);
          card.appendChild(actor);
        });
      });
  }

  fetchCharacters();
};

export default characters;
