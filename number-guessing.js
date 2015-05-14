var randomNumber = (Math.floor(Math.random()* 10) ) + 1;
var txt = document.querySelector('.number');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var guess = parseInt(txt.value);
  console.log (guess);
  alert(compare(guess, randomNumber));
});

function compare (guess, randomNumber) {
  if (guess > randomNumber) {
    return 'You guessed too high. Try again.';
  } else if (guess < randomNumber) {
    return 'You guessed too low. Try again.';
  } else if (guess == randomNumber) {
    return 'You won!';
  }
}
