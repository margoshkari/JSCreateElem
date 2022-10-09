var main = document.getElementById("grid");
var link = document.getElementById("imgaddress");
var titleinput = document.getElementById("title");
var textinput = document.getElementById("text");
var searchinput = document.getElementById("searchCard");

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
    title.className = "cardtitle";
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

function SearchCard() {
  var titles = document.getElementsByClassName("cardtitle");
  if (searchinput.value != "") {
    for (let index = 0; index < titles.length; index++) {
      if (
        titles[index].innerHTML
          .toLowerCase()
          .includes(searchinput.value.toLowerCase())
      ) {
        titles[index].parentElement.style = "display: block;";
      } else {
        titles[index].parentElement.style = "display: none;";
      }
    }
  } else {
    for (let index = 0; index < titles.length; index++) {
      titles[index].parentElement.style = "display: block;";
    }
  }
}
