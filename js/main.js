var original = "You used to call me on my cell-phone. Late night when you need my love. Call me on my cell-phone. Late night when you need my love. And I know when that hotline bling. That can only mean one thing. I know when that hotline bling. That can only mean one thing. Ever since I left the city. You got a reputation for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out. 'Cause ever since I left the city, you started wearing less and goin' out more. Glasses of champagne out on the dance floor. Hangin' with some girls I've never seen before";

// var original = "I don't want no scrub. A scrub is a guy that can't get no love from me. Hanging out the passenger side of his best friend's ride. Trying to holler at me. I don't want no scrub. A scrub is a guy that can't get no love from me. Hanging out the passenger side of his best friend's ride trying to holler at me";

$("#newLyrics").hide();

// Split into array of words
original = original.split(/\s+/);

// var index = [4, 9, 14, 17, 24, 27, 34, 44, ]
var index = [7, 12, 14, 19, 24, 26, 33, 45, 57, 61, 76, 91, 93, 101];

var input_names = [" noun", " verb", " noun", " noun", " verb", " noun", " verb", " verb", " noun", " noun", " verb(past tense)", " verb(ing)", " noun(plural)", " verb(-ing)"];

var counter = 0;
$("#type").text(input_names[counter]);

// For reference
// var fixed = "You used to ___(verb1) me on my ____(noun1). ___(adj1) ___(noun2) when you need my love. ___(verb1) me on my ___(noun1). ___(adj1) ___(noun2) when you need my love. And I ___(verb2) when that hotline bling. That can only mean one thing. I know when that hotline bling. That can only mean one thing. Ever since I ___(verb3 (past)) the ____(noun2). You got a ___(noun3) for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out. 'Cause ever since I left the city, you started wearing less and goin' out more. ___(noun4 (plural)) of champagne out on the dance floor. ___(verb4 (ing)) with some ___(noun5 (plural)) I've never seen before";

var words = [];


$("#submit_word").click(function(){
  if (counter<input_names.length-1){
    counter++;
    $("#type").text(input_names[counter]); //works
    words.push($("#enter_word").val()); // is making arry
    $("#enter_word").val("").css("color", "pink");
    console.log("This is words");
    console.log(words);
  }

  else {
    for (var i in index){
      original[index[i]] = words[i];
    }

    var newLyrics = original.join(" ");
    $("#newLyrics").show();
    $("#newLyrics").text(newLyrics);
    $("#submit_word").hide();
    $("#submitials").hide();
    console.log("This is that new new");
    console.log(newLyrics);

  }


});
