//check off specific todos by clicking
$("ul").on("click","li",function() {
$(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click","span",function (event) {
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  //doesnt allow to get to other layers
  event.stopPropagation();
});
//checks if the user pressed the Enter key(which=13) and adds a new item on ul
$("input[type='text']").on("keypress",function(event) {
  if (event.which === 13) {
  var todoText =  $(this).val();
  //sets empty input
  $(this).val("");
  //create a new li and add to ul
  $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>"+todoText+"</li>");
  }

});
$(".fa-plus-circle").click(function() {
  $("input[type='text']").fadeToggle()
});
