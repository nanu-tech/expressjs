// to use express we need to import it first
let express = require("express");
//create a new variable
//This will create or return an express server
let myApp = express();
myApp.use(express.urlencoded({ extended: false }));
//let our server know what it should do if someone sends a request to the homepage
//We give 2 arguments; the first is the url you want to be on the lookout for, the second is a function that will run every time someone sends a request to express
myApp.get("/", function (req, resp) {
  resp.send(
    ` <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off>
        <button> Submit Answer</button>
        </form> `
  );
});
//tell our app what it should do when it gets a post request(answer)url
myApp.post("/answer", function (req, res) {
  if (req.body.skyColor.toUpperCase() == "BLUE") {
    res.send(`
    <p>Congrats, that is the correct answer!</P>
    <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
    <p>Sorry, that is incorrect!</P>
    <a href="/">Back to homepage</a>
    `);
  }
});

myApp.get("/answer", function (req, res) {
  res.send("Are you lost? There is nothing to see here");
});
//Ask server to start listening to incoming requests
myApp.listen(3000);
