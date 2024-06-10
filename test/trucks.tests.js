// import mongoose from "mongoose";
// import chaiHttp from "chai-http";
// import * as chaiModule from "chai";
// import { describe, it } from "mocha";
// import app from "../index.js";
// const  Truck = mongoose.model("Truck");
// const chai = chaiModule.use(chaiHttp)
// const agent = await chai.request(app);

// //const expect = chai.expect;
// //chai.should();
// //chai.use(chaiHttp);

// describe('truck', () => {
//   let token;

//   before((done) => {
//     mongoose.connect('mongodb://localhost:3000/MOA API_TEST', 'mongodb+ srv://stanmbatia19:Wisefool1@cluster0.awujof0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//       .then(() => {
//         const truck = new Truck({
//           truckId: '111',
//           regNumber: 'KDA 335T',
//           currentCapacity: '0',
//           driver: 'Nduati',
//           destination: 'Mumias',
//           maximumLoad: '2500'
//         });
//         truck.save((error, truck) => {
//           agent
//             .post('/api/trucks/post')
//             .send(truck)
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
//   describe('/GET trucks', () => {
//     it('should get all the trucks', (done) => {
//       agent
//         .get('/api/trucks/get')
//         .set('Authorization', token)
//         .end((error, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           done();
//         });
//     });
//   });
//   describe('/DELETE/:id truck', () => {
//     it('should DELETE a truck given the Id', () => {
//       const truck = new Truck({
//         truckId: '104',
//         regNumber: 'KDd 345T',
//         currentCapacity: '0',
//         driver: 'Ndungu',
//         destination: 'Mutomo',
//         maximumLoad: '2000'
//       });
//       truck.save((error, truck) => {
//         agent
//           .delete('/api/trucks/delete' + truck.Id)
//           .set('Authorization', token)
//           .end((error, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message').eql('Truck deleted successfully');
//             done();
//           });
//       });
//     });
//   });
//   describe('/UPDATE/:id truck', () => {
//     it('should UPDATE a truck given the Id', () => {
//       const bag = new Truck({
//         truckId: '115',
//         regNumber: 'KBX 224K',
//         currentCapacity: '0',
//         driver: 'Mwai',
//         destination: 'Kisumu',
//         maximumLoad: '3000'
//       });
//       truck.save((error, truck) => {
//         agent
//           .update('/api/trucks/update' + truck.Id)
//           .set('Authorization', token)
//           .end((error, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message').eql('Truck updated successfully');
//             done();
//           });
//       });
//     });
//   });
// });