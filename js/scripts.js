// Business Logic

$(document).ready(function() {
  $("#meatForm").submit(function(event) {
    var meats = ["meat1", "meat2", "meat3", "meat4"];
    meats.forEach(function(meat) {
      var userInput = $("input#" + meat).val();
      $("." + meat).text(userInput);
    });

    $("#ticket").show();

    event.preventDefault();
  });
});
