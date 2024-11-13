//interecceto gli id che mi interessano

const frmList = document.getElementById("myList");
const myInput = document.getElementById("myInput");
const btninsert = document.getElementById("btnInsert");
const list = document.getElementById("list");

//mi creo un'array di contenimento

const toDoList = [];

//non ho eventi a inizio pagina quindi creo il mio primo evento, ovvero dopoo che l'utente ha cliccato sul bottone

btninsert.addEventListener("click", function (e) {
  //dopo che ha cliccato
  e.preventDefault(); // di default
  pushArray(); //riempiamo l'array
  printList(); //stampiamo nella lista
  frmList.reset(); //svuotiamo il campo
});

//funzione di push

function pushArray() {
  if (myInput.value === "") {
    return;
  } else {
    toDoList.push(myInput.value);
  }
  //console.log(toDoList); //fatto per vedere se funzionava il push
}

function printList() {
  list.innerHTML = ""; //questo perchè altrimenti ristampa tutto l'array ogni volta
  //oora la parte difficile
  for (let i = 0; i < toDoList.length; i++) {
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    newSpan.innerText = toDoList[i];
    check(newSpan)
    let btnTrash = document.createElement("button");
    let icon = document.createElement("ion-icon");
    icon.setAttribute("name", "trash-outline");
    icon.classList.add("trash"); //icona da ion-icon, ho attribuito un attributo e poi incollato il valore dell'attributo
    btnTrash.appendChild(icon);
    btnTrash.setAttribute("type", "button");
    btnTrash.setAttribute("onclick", `deleteItem(${i})`); //richiamo un'altra funzione per eliminare l'i nell'array toDoList
    newLi.appendChild(newSpan);
    newLi.appendChild(btnTrash);
    list.appendChild(newLi);
  }
}

function deleteItem(index) {
  toDoList.splice(index, 1);
  printList();
}

function check(newSpan) {
    newSpan.addEventListener('click', function() {
        newSpan.classList.toggle('checked'); // Toggles the "barratura" class
    });
}
