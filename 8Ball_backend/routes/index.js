var express = require('express');
var router = express.Router();

//array of responses
var answers = [ "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."];

/* GET 8 ball response */
router.get('/shake', function(req, res, next) {

  //sends a random response back
  res.send({ball_response: answers[Math.floor(Math.random() * answers.length)]})
});

module.exports = router;
