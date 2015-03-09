$(function() {
  var answer = Math.floor(Math.random() * 100) + 1,
      $message = $("p"),
      starting_message = $message.text(),
      guesses = 0;

  $("form").on("submit", function(e) {
    e.preventDefault();

    var guess = +$("#guess").val();
    guesses++;
    if (guess === answer) {
      $message.text("You guessed it! It took you " + guesses + " guesses.");
    }
    else if (guess > answer) {
      $message.text("My number is lower than " + guess);
    }
    else {
      $message.text("My number is higher than " + guess);
    }
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    $message.text(starting_message);
  });
});
