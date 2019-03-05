let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
//The first test attempts to get all the bookings.
describe('/GET all products', () => {
  it('it should GET all the bookings', (done) => {
    chai.request('https://productsdemoazure.azurewebsites.net/products')
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              console.log('First test passed');
          done();
        });
  });
});

describe('/POST add a product', () => {
  it('Post a booking', (done) => {
      let product = {
          name : "TestProduct",
          price : 20,
          stock : 100
      }
      chai.request('https://productsdemoazure.azurewebsites.net/products')
        .post('/')
        .send(product)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              console.log('Second test passed');
          done();
        });
  });
});

// error when not updating numberofbags
describe('/PUT change a product', () => {
  it('PUT a booking', (done) => {
      let product = {
        name: "TestProduct",
      }
      chai.request('https://productsdemoazure.azurewebsites.net/products')
        .put('/1')
        .send(product)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              console.log('Third test passed');
          done();
        });
  });
});

describe('/DELETE a product', () => {
  it('DELETE a booking', (done) => {
      chai.request('https://productsdemoazure.azurewebsites.net/products')
        .delete('/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          console.log('Final test passed');
          done();
        });
  });
});

