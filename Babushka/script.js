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
      klon.querySelector("article").addEventListener("click", () => visDetaljer(ret));
      main.appendChild(klon);
    }
  });
}

// Kører ovenstående funktion visRetter / Viser detaljer om en enkelt ret i popup visning
function visDetaljer(ret) {
  console.log(ret);
  popup.style.display = "block";
  document.querySelector(".popup_navn").textContent = ret.navn;
  document.querySelector(".popimg").src = "billeder/" + ret.billednavn + "-md.jpg";
  document.querySelector(".langbeskrivelse").textContent = ret.langbeskrivelse;
  document.querySelector(".popup_pris").textContent = ret.pris + " kr.";
}

// Kører funktionen hentData
hentData();
