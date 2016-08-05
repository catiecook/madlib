var original = "You used to call me on my cell phone. Late night when you need my love. Call me on my cell phone. Late night when you need my love. And I know when that hotline bling. That can only mean one thing. I know when that hotline bling. That can only mean one thing. Ever since I left the city. You got a reputation for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out. 'Cause ever since I left the city, you started wearing less and goin' out more. Glasses of champagne out on the dance floor. Hangin' with some girls I've never seen before";

var counter = 0;

// Split into array of words
original = original.split(/\s+/);

// For reference
// var fixed = "You used to ___(verb1) me on my ____(noun1). ___(adj1) ___(noun2) when you need my love. ___(verb1) me on my ___(noun1). ___(adj1) ___(noun2) when you need my love. And I ___(verb2) when that hotline bling. That can only mean one thing. I know when that hotline bling. That can only mean one thing. Ever since I ___(verb3 (past)) the ____(noun2). You got a ___(noun3) for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out. 'Cause ever since I left the city, you started wearing less and goin' out more. ___(noun4 (plural)) of champagne out on the dance floor. ___(verb4 (ing)) with some ___(noun5 (plural)) I've never seen before";

var words = [];

var input_names = [" verb", " noun", " adjective", " noun", " verb", " noun", " adjective", " noun", " verb", " verb (past tense)", " noun", " noun", " noun (plural)", " verb (ing)", " noun (plural)"];

$("#submit_word").click(function(){
  counter ++;
  $("#type").text(input_names[counter]); 
  words.push($("#enter_word").val());
});

console.log(words);

// var type = [verb1, noun1, adj1, noun2, verb2, verb3, noun2, noun3, noun4, verb4, noun5];

var index = [3, 7, 8, 9, 15, 19, 20, 21, 29, 55, 57, 61, 97, 105, 108];

for (var i in index){
  original[index[i]] = words[i];
}

console.log(original);
