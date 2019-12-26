//Parametry
let aktywnyElement = 0;
const czasZmiany = 4000;
// Pobieramy 4 elementy na których pracujemy
const img = document.querySelector(".img");
const h1 = document.querySelector(".img-h1");
const divOpcja = document.querySelectorAll(".menu div");

//Informacje w tablicach o elementach podmienianych
const pliki = [
  "img/dzien1.jpg",
  "img/dzien2.jpg",
  "img/dzien3.jpg",
  "img/dzien4.jpg",
  "img/dzien5.jpg",
  "img/dzien6.jpg",
  "img/dzien7.jpg"
];
const nazwy = [
  "Dzień 1",
  "Dzień 2",
  "Dzień 3",
  "Dzień 4",
  "Dzień 5",
  "Dzień 6",
  "Dzień 7"
];

function zmiannyElementu() {
  aktywnyElement++;
  if (aktywnyElement == pliki.length) {
    aktywnyElement = 0;
  }
  img.style.backgroundImage = `url(${pliki[aktywnyElement]})`;
  h1.textContent = nazwy[aktywnyElement];
}

function dzien() {
  let numerDnia = this.textContent.charAt(this.textContent.length - 1);
  let pozycja = this.textContent;
  if (pozycja == "start") {
    setTimeout("location.href='http://www.kosiarzumyslow.pl/js3';", 100);
  }

  document.querySelectorAll(".galeria div").forEach((e, i) => {
    e.style.backgroundImage = `url(img/mini/dzien${numerDnia}_${i + 1}.jpg)`;
  });
  clearInterval(animacja);
  document.querySelector(".wrap2 h1").textContent = `Dzień ${numerDnia}`;
  document.querySelector(".img").style.display = "none";
  h1.style.display = "none";
  document.querySelector(".z0").style.display = "block";
  divOpcja.forEach(e => {
    document.scrollingElement.scrollTo(0, 0);
    document.querySelector('.menu').classList.remove('burger');
    e.classList.add("opcja");
    e.style.backgroundColor = "transparent";
    document.querySelector(".wrap2").classList.add("opcja");
  });
  document.querySelector(".menu").classList.add("opcja");

  this.style.backgroundColor = "#179fc3";
  console.log(this);
}

let animacja = setInterval(zmiannyElementu, czasZmiany);
divOpcja.forEach(e => e.addEventListener("click", dzien));

document.querySelector('.burger').addEventListener('click', e => {
  document.querySelector('.menu').classList.toggle('burger');
});