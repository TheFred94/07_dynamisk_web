// Variabel der styrer billede knapper
const snaps = document.querySelector("#snaps");
snaps.addEventListener("click", tjek);

document.querySelector("#oel").addEventListener("click", tjek);
document.querySelector("#cola").addEventListener("click", tjek);
document.querySelector("#groen_sodavand").addEventListener("click", tjek);

function tjek() {
  console.log("du har klikket på knappen");
  if (this.alt == "snaps" || this.alt == "oel") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
