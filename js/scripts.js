// Business Logic

$(document).ready(function() {
  $("#meatForm").submit(function(event) {
    var meat1Input = $("input#meat1").val();
    var meat2Input = $("input#meat2").val();
    var meat3Input = $("input#meat3").val();
    var meat4Input = $("input#meat4").val();


// User Interface Logic

  $(".meat1").append(meat1Input);
  $(".meat2").append(meat2Input);
  $(".meat3").append(meat3Input);
  $(".meat4").append(meat4Input);
  $("#ticket").show();

    event.preventDefault();
  });
});
