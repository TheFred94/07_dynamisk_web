const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};
let personer;
let filter = "ja";

const main = document.querySelector("main");

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

function vis(json) {
  console.log(json);
  const template = document.querySelector("template").content;
  json.forEach((person) => {
    // Loop gennem json
    if (filter == person.troende) {
      const klon = template.cloneNode(true);
      klon.querySelector(".billede").src = "faces/" + person.billede;
      klon.querySelector(".navn").textContent = person.fornavn + " " + person.efternavn;
      klon.querySelector(".email").textContent = person.email;
      klon.querySelector(".troende").textContent = person.troende;
      main.appendChild(klon);
    }
  });
}
hentData();
