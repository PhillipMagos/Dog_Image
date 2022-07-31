// Foundation
const express = require('express');
const app = express();
const request = require('request');

const logger = require("morgan");
const { response } = require("express");
app.use(logger("dev"));

app.use(express.static("public"));

// This URL is our API endpoint. THis is where we need to make the request
const url = "https://dog.ceo/api/breeds/image/random"

// Root Route
app.get("/", function(req, res) {
  request(url, function(error, response, body){
    // remember how 'request' works and what we need to do?
    if(!error && response.statusCode == 200){ 
      // Code that does something
      let data = JSON.parse(body);
      // use console.log to see what we are getting back.
      console.log("The request was very very scucessful", data);
      let newUrl = data.message;
      res.render("index.ejs", {image:newUrl});
    }
  })
  //res.render("index.ejs");

});



// Listener
app.listen(3000, () => {
  console.log('Dog Image App listening on port 3000');
})


