//business logic//
var piglatin = function(phrase) {
  if ((phrase % 4 === 0) && (phrase % 100 !== 0) || (phrase % 400 === 0)) {
    return true;
  } else {
    return false;
//business logic//

// user interface//
$(document).ready(function() {
  $("form#enter").submit(function(event) {
    event.preventDefault();
    var phrase= $("input#input1").val();
    var result = piglatin(phrase);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
//user interface//
