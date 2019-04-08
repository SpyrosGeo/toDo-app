var toDo = [];
window.setTimeout(function() {
  var input = prompt("What would You like to do?");
  while (input !== "quit") {
    if (input !== "new" && input !== "list" && input !== "delete") {
      alert("pls enter a valid command!");
    } else if (input === "list") {
      listTodo();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      //ask for index
      delTodo();
    }
    var input = prompt("What would You like to do?");
  }
  alert("ok, You quit the App!");



  //Functions

  function listTodo() {
    toDo.forEach(function(todo, i) {
      console.log(i + ": " + toDo[i]);
      alert(toDo.join("\n"));
    })
  }
  function addTodo() {
    var action = prompt("Pls Add a new Item to the List");
    toDo.push(action);
    alert("Item Added!");
  }
  //closes the current tab
  // window.top.close();
  function delTodo() {
    var index = prompt("enter index of todo to delete!")
    //delete the item
    //splice()
    toDo.splice(index, 1);
    alert("Item Deleted");
    toDo.forEach(function(todo, i) {
      console.log(i + ": " + toDo);
      alert("Current list is\n " + toDo.join("\n"));
    })
  }
}, 500)
