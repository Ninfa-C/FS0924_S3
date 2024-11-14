const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById('estrai')
const nExtract = [];

document.addEventListener("load", init());

function init() {
  cellCreation();
  estrazione();

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


function estrazione() {
    btnEstrai.addEventListener('click', function() {
        // Generate a random number between 1 and 90
        let extract;     
        do {
            extract = Math.floor(Math.random() * 90) + 1;
        } while (nExtract.includes(extract));
        nExtract.push(extract);
        console.log (nExtract)
        select()
    });
}

function select() {
    let cell = document.querySelectorAll('#tombola div p');
    for (let i = 0; i < cell.length; i++) {
    let cellNumber = parseInt(cell[i].innerText);
    if (nExtract.includes(cellNumber)) {
        cell[i].parentElement.classList.add('select');
        }
    }
}



