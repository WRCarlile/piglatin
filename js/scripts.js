  
  $("form#enter").submit(function(event) {
    event.preventDefault();
    var phrase= $("input#input1").val();
    var words= phrase.split(" ");
   var ay = 'ay ';

  words.forEach(function(translate){
      var letters = translate.split("");
      for (i=0; i<= letters.length; i++){
        if ((letters[i] ==='a')||(letters[i] ==='e')||(letters[i] ==='i')||(letters[i] ==='o')||(letters[i] ==='u')||(letters[i] ==='A')||(letters[i] ==='E')||(letters[i] ==='I')||(letters[i] ==='O')||(letters[i] ==='U')){
          var consonantArray = letters.slice(0,i);
          var vowelArray = letters.slice(i,letters.length);
          var concated = vowelArray.concat(consonantArray);
          var final = concated.concat(ay);
          var joinedString = final.join("");

        $("#output").append(joinedString);
        }
      }
    });
  });

// Coert decimal to binary//
$("form#enter2").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("#input2").val());
  num = number.toString(2);
  alert(num);
});
