const express = require('express');
const app = express();
let kitten = require('./app/routes/kitten');
let config = require('config');

let options = { 
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
  }; 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');

mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'conneciton error:'));

app.get('/', (req, res) => res.send('Welcome to the kitty pound!!'));

app.route('/kittens')
  .get(kitten.getKittens)
  .post(kitten.postKitten);

/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  // Connected

  var kittySchema = mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "My name is " + this.name
      : "I don't have a name";
      console.log(greeting);
  }

  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence = new Kitten({name: 'Silence'});

  var fluffy = new Kitten({name: 'Fluffy'});

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
  silence.save(function (err, silence) {
    if (err) return console.error(err);
    silence.speak();
  });


  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });
  Kitten.find({name:'Fluffy'}, function (err, kitten) {
    console.log(kitten[0].name);
  });

});
*/


app.listen(3000, () => console.log('Running on port 3000'));
