var express = require('express')
var bodyParser = require('body-parser')

var logger = require('morgan')

// Create Instance of Express
var app = express()
var PORT = process.env.PORT || 3000 // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'))

//body and cookie parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))

//set static folder
app.use(express.static('./public'))

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/view/public/index.html')
})

//listen on port
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT)
})
