var original = "You used to call me on my cell-phone. Late night when you need my love. Call me on my cell-phone. Late night when you need my love. And I know when that hotline bling. That can only mean one thing. I know when that hotline bling. That can only mean one thing. Ever since I left the city. You got a reputation for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out. 'Cause ever since I left the city, you started wearing less and goin' out more. Glasses of champagne out on the dance floor. Hangin' with some girls I've never seen before";

$("#newLyrics").hide();

// Split into array of words
original = original.split(/\s+/);

var index = [3, 7, 8, 9, 15, 19, 20, 21, 29, 55, 57, 61, 97, 105, 108];

var input_names = [" verb", " noun", " adjective", " noun", " verb", " noun", " adjective", " noun", " verb", " verb (past tense)", " noun", " noun", " noun (plural)", " verb (ing)", " noun (plural)"];

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
    $("#enter_word").val("");
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
