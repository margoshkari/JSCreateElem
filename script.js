var main = document.getElementById("grid");
var link = document.getElementById("imgaddress");
var titleinput = document.getElementById("title");
var textinput = document.getElementById("text");

function AddCard() {
  if (
    link.value.length > 0 &&
    titleinput.value.length > 0 &&
    textinput.value.length > 0
  ) {
    var newCard = document.createElement("div");
    newCard.className = "card";

    var image = document.createElement("img");
    image.src = link.value;

    var title = document.createElement("h3");
    title.innerHTML = titleinput.value;

    var description = document.createElement("p");
    description.innerHTML = textinput.value;

    var deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.onclick = (e) => DeleteCard(e);

    newCard.appendChild(image);
    newCard.appendChild(title);
    newCard.appendChild(description);
    newCard.appendChild(deletebtn);

    main.appendChild(newCard);
  } else {
    alert("Fill all fields!");
  }
}

function DeleteCard(e) {
  e.target.parentElement.remove();
}
