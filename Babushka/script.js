let retter;
let filter = "alle";

// URL og api nøgle til restdb data
const url = "https://babushka-dd8a.restdb.io/rest/menu";
const options = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

// funktion der henter data ind på siden vha ovenstående
async function hentData() {
  const respons = await fetch(url, options);
  retter = await respons.json();
  console.log("Menu", retter);
  visRetter();
}
// Tager fat i main fra DOM
const main = document.querySelector("main");

// Kører funktionen visRetter fra ovenstående hentData funktion
function visRetter() {
  const template = document.querySelector("template").content;
  //   Sletter indhold fra main ved skift af filter
  main.textContent = "";
  //   Loop gennem json
  retter.forEach((ret) => {
    if (filter == ret.drikkevarer || filter == "alle") {
      const klon = template.cloneNode(true);
      klon.querySelector(".billede").src = "billeder/" + ret.billednavn + "-md.jpg";
      klon.querySelector(".ret").textContent = ret.navn;
      klon.querySelector(".kort_beskrivelse").textContent = ret.kortbeskrivelse;
      klon.querySelector(".pris").textContent = ret.pris + " kr.";
      main.appendChild(klon);
    }
  });
}

// Kører funktionen hentData
hentData();
