var randomNumber;
var foods_from_json;

var foods_json_stringify = JSON.stringify(foods_json);
foods_from_json = JSON.parse(foods_json_stringify);
function food_randomizer() {
  randomNumber = getRandomInt(0, foods_from_json.length);
  console.log(randomNumber);
  console.log(foods_from_json);
  document.getElementById("food_display").innerHTML = foods_from_json[randomNumber]['food_name'];
  Checkout_Recipe();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function Checkout_Recipe() {  
  var youtube_div = document.getElementById("youtube_div");
  youtube_div.style.display = "block";

  var youtube_iframe = document.getElementById("youtube_iframe");
  youtube_iframe.setAttribute("src", foods_from_json[randomNumber]['food_youtube_link']);
}