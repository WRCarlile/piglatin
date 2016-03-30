//business logic//
// var piglatin = function(phrase) {
//

//business logic//

// user interface//

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

    //
    // var newwords = words.map(function(word) {
    //

    // });


    // for (var index = 0; index < words.length; index += 1) {
    //     words.forEach(function(word) {
    //       $(words).slice(0,1);
    //     console.log(words);
    //     });
    //
    // };


    // for (var index = 0; index < words.length; index += 1) {
    //   words =
    // }

// var vowel = ["a","e","i","o","u"];
    // var result = piglatin(phrase);
    //
    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }
    //
    // $("#result").show();

//user interface//
