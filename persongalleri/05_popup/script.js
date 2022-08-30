let personer;
let filter = "alle";

const header = document.querySelector("h1");
const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filtrerPersoner));
document.querySelector("#luk").addEventListener("click", () => (popup.style.display = "none"));

function filtrerPersoner() {
  filter = this.dataset.troende;
  document.querySelector(".valgt").classList.remove("valgt");
  header.textContent = this.textContent;
  this.classList.add("valgt");
  vis();
}

const main = document.querySelector("main");

async function hentData() {
  const respons = await fetch(url, options);
  personer = await respons.json();
  console.log("Personer", personer);
  vis();
}

function vis() {
  const template = document.querySelector("template").content;
  main.textContent = "";
  personer.forEach((person) => {
    // Loop gennem json
    if (filter == person.troende || filter == "alle") {
      const klon = template.cloneNode(true);
      klon.querySelector(".billede").src = "../faces/" + person.billede;
      klon.querySelector(".navn").textContent = person.fornavn + " " + person.efternavn;
      klon.querySelector(".email").textContent = person.email;
      klon.querySelector(".troende").textContent = person.troende;
      klon.querySelector("article").addEventListener("click", () => visDetaljer(person));
      main.appendChild(klon);
    }
  });
}
function visDetaljer(person) {
  console.log(person);
  popup.style.display = "block";
  document.querySelector(".popimg").src = "../faces/" + person.billede;
  document.querySelector(".popupnavn").textContent = person.fornavn + " " + person.efternavn;
  document.querySelector(".titel").textContent = person.titel;
  document.querySelector(".email").textContent = person.email;
  document.querySelector(".fdag").textContent = person.fødselsdag;
  document.querySelector(".hobby").textContent = person.hobby;
  document.querySelector(".tro").textContent = person.troende;
}

hentData();
