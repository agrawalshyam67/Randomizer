function food_randomizer() {
  var randomNumber = getRandomInt(0, foods.length);
  console.log(foods[randomNumber]);
  document.getElementById("food_display").innerHTML = foods[randomNumber];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}