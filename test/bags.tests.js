// import mongoose from "mongoose";
// // import * as chai from "chai";
// import * as chaiModule from "chai";
// import chaiHttp from "chai-http";
// import { describe, it } from "mocha";
// import app from "../index.js"
// const Bag = mongoose.model("Bag");
// const chai = chaiModule.use(chaiHttp)
// const agent = await chai.request(app);

// //chai.should();
// //const expect = chai.expect;
// //chai.use(chaiHttp);

// describe('bag', () => {
//   let token;

//   before((done) => {
//     mongoose.connect('mongodb://localhost:3000/MOA API_TEST', 'mongodb+ srv://stanmbatia19:Wisefool1@cluster0.awujof0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//       .then(() => {
//         const bag = new Bag({
//           bagId: '144',
//           destination: 'Mwea',
//           weight: '25',
//           units: 'kgs',
//           truckId: '122'
//         });
//         bag.save((error, Bag) => {
//           agent
//             .post('/api/bags/post')
//             .send(bag)
//             .end((error, res) => {
//               token = res.body.token;
//               done();
//             });
//         });
//       })
//       .catch(error => done(error));
//   });
//   after((done) => {
//     mongoose.connection.db.dropDatabase(() => {
//       mongoose.connection.close(done);
//     });
//   });
//   describe('/GET bags', () => {
//     it('should get all the bags', (done) => {
//       agent
//         .get('/api/bags/get')
//         .set('Authorization', token)
//         .end((error, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/DELETE/:id bag', () => {
//     it('should DELETE a bag given the Id', () => {
//       const bag = new Bag({
//         bagId: '155',
//         destination: 'Kitale',
//         weight: '45',
//         units: 'kgs',
//         truckId: '224'
//       });
//       bag.save((error, Bag) => {
//         agent
//           .delete('/api/bags/delete' + bag.Id)
//           .set('Authorization', token)
//           .end((error, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message').eql('Bag deleted successfully');
//             done();
//           });
//       });
//     });
//   });
//   describe('/UPDATE/:id bag', () => {
//     it('should UPDATE a bag given the Id', () => {
//       const bag = new Bag({
//         bagId: '111',
//         destination: 'Mwea',
//         weight: '155',
//         units: 'lbs',
//         truckId: '223'
//       });
//       bag.save((error, Bag) => {
//         agent
//           .update('/api/bags/update' + bag.Id)
//           .set('Authorization', token)
//           .end((error, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message').eql('Bag updated successfully');
//             done();
//           });
//       });
//     });
//   });
// });