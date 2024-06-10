import mongoose from "mongoose";
// import * as chai from "chai";
import * as chaiModule from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "mocha";
import app from "../index.js"
const User = mongoose.model("User");
const chai = chaiModule.use(chaiHttp)
const agent = await chai.request(app);

// const expect = chai.expect;
// chai.should();

describe('Auth', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:3000/MOA API_TEST', 'mongodb+ srv://stanmbatia19:Wisefool1@cluster0.awujof0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      .then(() => done())
      .catch(error => done(error));
    // mongoose.connection.collections['users'].drop((err) => {
    //   if (err) {
    //     console.error('Error dropping collection:', err);
    //   }
    //   mongoose.connection.close(done);
    // });
  });
  after((done) => {
    mongoose.connection.collections['users'].drop((err) => {
      if (err) {
        console.error('Error dropping collection:', err);
      }
      mongoose.connection.close(done);
    });
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});

describe('/POST register', () => {
  it('it should register a user', (done) => {
    let user = {
      name: 'Stephen Kimathi',
      email: 'test5@email.com',
      password: '1234',
      role: 'SUPERVISOR',
    };

    agent
      .post('/api/auth/register')
      .send(user)
      .end((error, res) => {
        //console.log(res)
        res.status.should.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('User registered successfully');
        done();
      });
  });

  describe('/POST login', () => {
    it('it should be a login and return a token', (done) => {
      let user = new User({
        name: 'Jacinta Njeri',
        email: 'jacnje@gmail.com',
        password: '4321',
        role: 'admin'
      });
      user.save((error, user) => {
        agent
          .post('/api/auth/login')
          .send({ email: 'jacnje@gmail.com', password: '4321' })
          .end((error, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('token');
            done();
          });
      });
    });
  });
});