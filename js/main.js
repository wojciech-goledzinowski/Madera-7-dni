let aktywnyElement = 0;
const czasZmiany = 4000;
let aktualneZdjęcie = 0;
let numerDnia;

const img = document.querySelector(".img");
const h1 = document.querySelector(".img-h1");
const divOpcja = document.querySelectorAll(".menu div");

const pliki = ["img/dzien1.jpg", "img/dzien2.jpg", "img/dzien3.jpg",
  "img/dzien4.jpg", "img/dzien5.jpg", "img/dzien6.jpg", "img/dzien7.jpg"
];
const nazwy = ["Dzień 1", "Dzień 2", "Dzień 3", "Dzień 4", "Dzień 5", "Dzień 6", "Dzień 7"];
const opis = [
  `No i wreszcie wylądowaliśmy na Maderze. Lądowanie na krótkim pasie wspartym na palach niesamowite. Wyspa we wrześniu, najcieplejszym okresie w roku, przywitała nas ogromną ilością zieleni, barw i zapachów. Rośliny, które widujemy w Polsce w doniczkach są raczej małe, tu na wilgotnej ziemi są roślinami ogrodowymi o wybujałych rozmiarach. Zatrzymaliśmy się w malutkim hotelu bezpośrednio nad urwiskiem spadającym do oceanu. To tylko siedem dni a tyle w planach do zwiedzania!`,
  `Po porannym posiłku ustalanie planu na cały dzień. Plan mamy ambitny. Nie poruszamy się inaczej jak na nogach, komunikacją miejską i międzymiastową. Nie jest to łatwe bo kilku przewoźników ma wyspę podzieloną między siebie a na rozkładach jazdy nie wszystko jest ujęte np. 30 min przerwy kierowcy. Dlatego pierwszy dzień nie jest wyśrubowany. Okolica miasteczka, w którym mieszkamy. Potem cudowny ogród pełny roślin ale też rzeźb, fontann, mostków, podzielony na kultury np. chińska.`,
  `Dziś tylko pieszo ruszyliśmy na pierwsze lewady. Choć zaopatrzyliśmy się we wszystkie materiały
pomocnicze jakoś nie do końca nam wyszło. Początek był nawet łatwy ale później… Na jedną lewadę
weszliśmy „od tyłu” no i spędziliśmy sporo czasu błąkając się i szukając drogi powrotnej.Ścieżka
zwyczajnie się skończyła ścianą i wodospadem. Zmęczeni niebotycznie. Jednak udało się realizować
plan dnia. Wróciliśmy do hotelu bogatsi o nowe doświadczenia z pięknymi zdjęciami i w dobrym humorze.`,
  `Zdobywamy najwyższy szczyt na Maderze - Pico Ruvio. Oczywiście najpierw jazda dwoma autobusami
na tyle wcześnie by zdążyć na wejście i zejście przed pogorszeniem pogody, pogoda jest niezwykle
zmienna. No i oczywiście by zdążyć na autobusy powrotne. Już byliśmy blisko podejścia do szczytu
gdy kierowca zrobił sobie 30 min. przerwę choć nie była na rozkładzie. Dotarliśmy pod szczyt. Trochę padało, duża wilgotność powietrza, stroma ścieżka wzmocniona gdzieniegdzie belkami i krążące chmury zapowiadające zmianę pogody nam nie pomagały ale się udało.`,
  `Ten dzień przeznaczyliśmy na zwiedzanie kolejnego miasta oraz wypad na szklany taras widokowy.
Miasto cudowne położone bezpośrednio nad oceanem. Wąskie uliczki pełne małych urokliwych resteuracyjek. Uliczki przybrane na różny sposób. Jedna cała w balonach, inna w parasole, samoloty a nawet wiszące z góry butelki. Pełna dowolność i fantazja. Chłoniemy widoki, smakujemy soczyste owoce. Nie ma jak maderska dojrzała papaja. Jeśli chcecie kupić najlepsze owoce to tylko na targu z samego rana sprzedawane przez rolników. Dla śpiochów zostaną owoce u handlarzy, też całkiem ale znacznie droższe.`,
  `Kolejne levady ale nie tylko. Największą atrakcją ogromne wrzośce porastające zbocza ale przede
wszystkim Levada 25 wodospadów. Niestety duże rozczarowanie. Miejsce byłoby znacznie atrakcyjniejsze gdyby nie ilość turystów odwiedzających je w jednym momencie i pozostawiających
po sobie pamiątki. Szkoda. Uparłam się bo chciałam zobaczyć tyle wodospadów w jednym miejscu.
Wiem już, że są miejsca, których nie odwiedzę. Za to udało się nam przejść przez tunel wydrążony w górze z mokrymi ścianami, które śladowo porastał mech.`,
  `Niestety to ostatni dzień na Maderze, jutro wyjeżdżamy. Ale za to jaki wspaniały. Ruszamy na
zwiedzanie klifów. Wcześniej tylko sprawdzamy, o której musimy wrócić na autobus i kupujemy torbę zielonych dojrzałych fig. Pogoda idealna z lekkim wiaterkiem. Tylko podziwiać widoki. Jeśli chcesz połączyć długi marsz z widokiem na wielokolorowe skały i ocean no i nie masz lęku wysokości to dobre miejsce. Tereny rozległe. Przestrzeń dająca wrażenie swobody. Doszliśmy do końca klifów już dalej tylko ocean i wygrzewające się na skałach małe, śmieszne jaszczurki. Ostatnie spojrzenie na otaczającą nas przyrodę i już wracamy.`
]

function zmiannyElementu() {
  aktywnyElement++;
  if (aktywnyElement == pliki.length) {
    aktywnyElement = 0;
  }
  img.style.backgroundImage = `url(${pliki[aktywnyElement]})`;
  h1.textContent = nazwy[aktywnyElement];
}

function dzien() {
  numerDnia = this.textContent.charAt(this.textContent.length - 1);
  let pozycja = this.textContent;
  if (pozycja == "start") {
    setTimeout("location.href='http://www.kosiarzumyslow.pl/js3';", 100);
    return;
  }

  document.querySelectorAll(".galeria div").forEach((e, i) => {
    e.style.backgroundImage = `url(img/mini/dzien${numerDnia}_${i + 1}.jpg)`;
  });
  clearInterval(animacja);
  document.querySelector(".wrap2 h1").textContent = `Dzień ${numerDnia}`;
  document.querySelector('.p').textContent = opis[numerDnia - 1];
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
}

function pokaz() {
  aktualneZdjęcie = this.dataset.key * 1 + 1;
  document.querySelector('.wrap').classList.add('activ');
  document.querySelector('.pokaz').classList.add('activ');
  document.querySelector('.pokaz').style.backgroundImage = this.style.backgroundImage.replace('mini', 'img');
}

function zamknij() {
  document.querySelector('.wrap').classList.remove('activ');
  document.querySelector('.pokaz').classList.remove('activ');
}

function zmienLewe() {
  if (aktualneZdjęcie > 1) aktualneZdjęcie--;
  document.querySelector('.pokaz').style.backgroundImage = `url(img/img/dzien${numerDnia}_${aktualneZdjęcie}.jpg)`

}

function zmienPrawe() {
  if (aktualneZdjęcie < 10) aktualneZdjęcie++;
  document.querySelector('.pokaz').style.backgroundImage = `url(img/img/dzien${numerDnia}_${aktualneZdjęcie}.jpg)`

}

let animacja = setInterval(zmiannyElementu, czasZmiany);
divOpcja.forEach(e => e.addEventListener("click", dzien));

document.querySelector('.burger').addEventListener('click', e => {
  document.querySelector('.menu').classList.toggle('burger');
});

document.querySelectorAll('.galeria div').forEach(e =>
  e.addEventListener('click', pokaz));

document.querySelector('.fa-times-circle').addEventListener('click', zamknij);

document.querySelector('.fa-angle-left').addEventListener('click', zmienLewe);

document.querySelector('.fa-angle-right').addEventListener('click', zmienPrawe);