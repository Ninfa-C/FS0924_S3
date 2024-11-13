/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

/*    document.addEventListener('load', init());

function init() {
  changeTitle();
}
*/
const title = document.querySelector("h1");

const changeTitle = function () {
  title.innerText = "EPICODE";
};

changeTitle();

/* ESERCIZIO 2
      Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  title.classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
      Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  let text = document.querySelectorAll("div p");
  text.forEach((p) => {
    p.innerText = "Ciao a tutto il corso fs0924";
  });
};

changePcontent();

/* ESERCIZIO 4
      Scrivi una funzione che cambi la proprietà href di ogni link 
      (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");
  links.forEach((link) => {
    link.href = "https://www.google.com";
  });
};

changeUrls();

/* ESERCIZIO 5
      Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const newUL = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = "4th";
  newUL.appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
      Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const addP = document.querySelector("body>div:first-child");
  const newP = document.createElement("p");
  newP.innerText = "Paragrafo di prova";
  addP.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
      Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = () => {
  let hideList = document.getElementById("firstList");
  hideList.style.display='none';
};

hideFirstUl();

/* ESERCIZIO 8 
      Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  let ul = document.querySelectorAll("ul");
  ul.forEach((element) => (element.style.backgroundColor = "#83CE80"));
};
paintItGreen();

/* ESERCIZIO 9
      Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  title.addEventListener("click", function () {
    title.textContent = title.textContent.slice(0, -1);
  });
};
makeItClickable();

/* ESERCIZIO 10
      Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footerClick = document.querySelector("footer");
  const link = document.querySelector("footer a");
  footerClick.addEventListener("click", function () {
    alert(link.href);
  });
};
revealFooterLink();

/* ESERCIZIO 11
      Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
      La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  const h2 = document.createElement("h2");
  const thead = document.createElement("thead");

  const tr = document.createElement("tr");

  h2.innerText = "tabella";
  caption.appendChild(h2);
  table.appendChild(caption);

  const array = [
    {
      Immagine: 1,
      nomeProdotto: "aaa",
      quantità: 10,
      Prezzo: "xx",
    },
    {
      Immagine: 2,
      nomeProdotto: "bbb",
      quantità: 25,
      Prezzo: "xx",
    },
    {
      Immagine: 3,
      nomeProdotto: "ccc",
      quantità: 3,
      Prezzo: "xx",
    },
    {
      Immagine: 4,
      nomeProdotto: "ddd",
      quantità: 5,
      Prezzo: "xx",
    },
    {
      Immagine: 5,
      nomeProdotto: "eee",
      quantità: 9,
      Prezzo: "xx",
    },
  ];
  const objects = ["Immagine", "Nome Prodotto", "Quantità", "Prezzo"];
  objects.forEach((str) => {
    const th = document.createElement("th");
    th.innerText = str;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  array.forEach((element) => {
    const trData = document.createElement("tr");

    const tdImg = document.createElement("td");
    const img = document.createElement("img");
  tdImg.innerText = element.Immagine;
  tdImg.appendChild(img);
    trData.appendChild(tdImg);

    const tdName = document.createElement("td");
    tdName.innerText = element.nomeProdotto;
    trData.appendChild(tdName);

    const tdQt = document.createElement("td");
    tdQt.innerText = element.quantità;
    trData.appendChild(tdQt);

    const tdPrice = document.createElement("td");
    tdPrice.innerText = element.Prezzo;
    trData.appendChild(tdPrice);

    tbody.appendChild(trData);
    table.appendChild(tbody);
  });

  tableArea.appendChild(table);
};

generateTable();

//console.log(generateTable())

/* ESERCIZIO 12
      Crea una funzione che aggiunga una riga alla tabella precedentemente creata e 
      fornisca i dati necessari come parametri
    */

const addRow = function (Immagine, nomeProdotto, quantità, Prezzo) {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const trData = document.createElement("tr");

  const tdImg = document.createElement("td");
  const img = document.createElement("img");
  tdImg.innerText = Immagine;
  tdImg.appendChild(img);
  trData.appendChild(tdImg);

  const tdName = document.createElement("td");
  tdName.innerText = nomeProdotto;
  trData.appendChild(tdName);

  const tdQt = document.createElement("td");
  tdQt.innerText = quantità;
  trData.appendChild(tdQt);

  const tdPrice = document.createElement("td");
  tdPrice.innerText = Prezzo;
  trData.appendChild(tdPrice);

  tbody.appendChild(trData);
};

addRow(6, 'fff', 12,'xx');

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const immagini = document.querySelectorAll("table img");
  immagini.forEach((img) => {
    img.style.display = "none";
  });
};
/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};
