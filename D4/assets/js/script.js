const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById("estrai");
const btnAgain = document.getElementById("again");
const nExtract = [];

document.addEventListener("load", init());

function init() {
  cellCreation();
  end();
  //startPlaying()
  again();
}

function cellCreation() {
  for (let i = 0; i < 90; i++) {
    const celleDiv = document.createElement("div");
    const cellValue = document.createElement("p");
    cellValue.classList.add("cellValue");
    cellValue.innerText = i + 1;
    celleDiv.appendChild(cellValue);
    tombola.appendChild(celleDiv);
  }
}

function end() {
  btnEstrai.addEventListener("click", function () {
    if (nExtract.length === 90) {
      btnEstrai.setAttribute('disabled', 'true');
      btnEstrai.classList.add('not')
      return;
    } else estrazione();
  });
}

function estrazione() {
  let extract;
  do {
    extract = Math.floor(Math.random() * 90) + 1;
  } while (nExtract.includes(extract));
  nExtract.push(extract);
  console.log(nExtract);
  select();
}

function select() {
  let cell = document.querySelectorAll("#tombola div p");
  for (let i = 0; i < cell.length; i++) {
    let cellNumber = parseInt(cell[i].innerText);
    if (nExtract.includes(cellNumber)) {
      cell[i].parentElement.classList.add("select");
    }
  }
}

function again() {
  btnAgain.addEventListener("click", function () {
    nExtract.splice(0, nExtract.length);
    let cell = document.querySelectorAll("#tombola div p");
    cell.forEach((cell) => {
      cell.parentElement.classList.remove("select");
    });
    btnEstrai.removeAttribute('disabled')
    btnEstrai.classList.remove('not')
  });
}
