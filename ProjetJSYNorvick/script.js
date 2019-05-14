var openedWidgets = [];

$(document).ready(function() {

  $("#icons li a").click(function() {

    var id = $(this).attr("id");


    if (openedWidgets.indexOf(id) > -1) {

      $("#" + id + "_widget").remove();

      openedWidgets.splice(openedWidgets.indexOf(id), 1);


    } else {
      var url = "widgets/" + id.toLowerCase() + "_widget.html";

      $('#widgets').append($('<div></div>').load(url));

      openedWidgets.push(id);

    }
  
    console.log(openedWidgets);
  });

  $("#widgets").draggable(function() {

    var id = $(this).attr("id");

    $("#" + id + "_widget").draggable();

  });
});
