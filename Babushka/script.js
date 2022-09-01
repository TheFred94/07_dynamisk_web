// URL og api nøgle til restdb data
const url = "https://babushka-dd8a.restdb.io/rest/menu";
const options = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

// funktion der henter data ind på siden vha linje: 1 - 7
async function hentData() {
  const respons = await fetch(url, options);
  retter = await respons.json();
  console.log("Menu", retter);
  //   visRetter();
}

// Kører funktionen visRetter fra ovenstående hentData funktion
function visRetter() {
  const template = document.querySelector("template").content;
  main.textContent = "";
}

// Tager fat i main fra DOM
const main = document.querySelector("main");

// Kører funktionen hentData
hentData();
