let retter;
let filter = "alle";
const header = document.querySelector("h1");

// URL og api nøgle til restdb data
const url = "https://babushka-dd8a.restdb.io/rest/menu";
const options = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

// Filter const der tager fat i nav og sætter click eventlistener på nav
const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filtrerRetter));

// tager fat i class=luk i DOM og giver click eventlistener som lukker vinduet
document.querySelector(".luk").addEventListener("click", () => (popup.style.display = "none"));

function filtrerRetter() {
  filter = this.dataset.kategori;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  visRetter();
}
// Tager fat i main fra DOM
const main = document.querySelector("main");

// funktion der henter data ind på siden vha ovenstående
async function hentData() {
  const respons = await fetch(url, options);
  retter = await respons.json();
  console.log("Menu", retter);
  visRetter();
}

// Kører funktionen visRetter fra ovenstående hentData funktion
function visRetter() {
  const template = document.querySelector("template").content;
  //   Sletter indhold fra main ved skift af filter
  main.textContent = "";
  //   Loop gennem json
  retter.forEach((ret) => {
    if (filter == ret.kategori || filter == "alle") {
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
