let mongoose = require("mongoose");
let Kitten = require('../app/models/kitten');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Kittens', () => {
  beforeEach((done) => { // Do something before each test
  });

  describe('/GET kittens', () => {
    it('it should GET all the kittens', (done) => {
      chai.request(server)
        .get('/kittens')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    });
  });
});
