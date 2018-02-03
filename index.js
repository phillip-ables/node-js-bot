//we have to do var or let
//something nice to have
'use strict'

//write in the fact that we requir our dependencies
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

// initialize app and its going to be an express application
const app = express()

//set some stuff for our individual application identified as app
//set the port, giving the enviroment configued or 5000
app.set('port', (process.env.PORT || 5000))

//process the message ->body-parser, allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//set up the routes

app.get('/', function(req, res) {
  res.send("HI, I am a chatbot")
})
//facebook security something, with our req we are going to pass a special token and verify if its correct for user to use password
app.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === "password"){
    res.send(req.query['hub.challenge'])
  }
  res.send("Wrong token")
})

//start server, you have to start listening. when you go to goodle.com you send a request for google and google sends back
//you have to be listening at a port number in order to get a message from the server
app.listen(app.get('port'), function() {
  console.log("running: port")
})
