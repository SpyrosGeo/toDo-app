var toDo = [];
window.setTimeout(function() {
  var input = prompt("What would You like to do?");
  while (input !== "quit") {
    if (input !== "new" && input !=="list" ) {
      alert("pls enter a valid command!");
    }
    else if (input === "list") {
      console.log(toDo);
      alert(toDo);
    } else if (input === "new") {
      var action = prompt("Pls Add a new Item to the List");
      toDo.push(action);
    }
    var input = prompt("What would You like to do?");
  }
  alert("ok, You quit the App!");
  //closes the current tab
  window.top.close();
},500)
