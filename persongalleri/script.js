const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

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
    const klon = template.cloneNode(true);
    klon.querySelector(".billede").src = "faces/" + person.billede;
    klon.querySelector(".navn").textContent = person.navn;
    klon.querySelector(".titel").textContent = person.titel;
    klon.querySelector(".fødselsdag").textContent = person.fødselsdag;
    main.appendChild(klon);
  });
}
hentData();
