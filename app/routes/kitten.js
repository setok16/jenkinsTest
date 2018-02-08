let mongoose = require('mongoose');
let Kitten = require('../models/kitten');

function getKittens(req, res) {
  let query = Kitten.find({});
  query.exec((err, kittens) => {
    if (err) res.send(err);
    res.json(kittens);
  });
}

function postKitten(req, res) {
  var newKitten = new Kitten(req.body);
  newKitten.save((err, kitten) => {
    if (err) {
      res.send(err);
    } else {
      res.json({messge: 'Kitten was successfully born!', kitten});
    }
  });
}

module.exports = { getKittens, postKitten };
