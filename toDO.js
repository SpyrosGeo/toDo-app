var toDo = [];
window.setTimeout(function() {
  var input = prompt("What would You like to do?");
  while (input !== "quit") {
    if (input === "list") {
      console.log(toDo);
      alert(toDo);
    } else if (input === "new") {
      var action = prompt("Pls Add a new Item to the List");
      toDo.push(action);
    } else {
      action("pls enter a valid command!");
    }
    var input = prompt("What would You like to do?");
  }
  alert("ok, You quit the App!");
},500)
