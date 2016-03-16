'use strict';

var app = require('../..');
import request from 'supertest';

var newCompanyName;

describe('CompanyName API:', function() {

  describe('GET /api/companyNames', function() {
    var companyNames;

    beforeEach(function(done) {
      request(app)
        .get('/api/companyNames')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          companyNames = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(companyNames).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/companyNames', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/companyNames')
        .send({
          name: 'New CompanyName',
          info: 'This is the brand new companyName!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCompanyName = res.body;
          done();
        });
    });

    it('should respond with the newly created companyName', function() {
      expect(newCompanyName.name).to.equal('New CompanyName');
      expect(newCompanyName.info).to.equal('This is the brand new companyName!!!');
    });

  });

  describe('GET /api/companyNames/:id', function() {
    var companyName;

    beforeEach(function(done) {
      request(app)
        .get('/api/companyNames/' + newCompanyName._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          companyName = res.body;
          done();
        });
    });

    afterEach(function() {
      companyName = {};
    });

    it('should respond with the requested companyName', function() {
      expect(companyName.name).to.equal('New CompanyName');
      expect(companyName.info).to.equal('This is the brand new companyName!!!');
    });

  });

  describe('PUT /api/companyNames/:id', function() {
    var updatedCompanyName;

    beforeEach(function(done) {
      request(app)
        .put('/api/companyNames/' + newCompanyName._id)
        .send({
          name: 'Updated CompanyName',
          info: 'This is the updated companyName!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCompanyName = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCompanyName = {};
    });

    it('should respond with the updated companyName', function() {
      expect(updatedCompanyName.name).to.equal('Updated CompanyName');
      expect(updatedCompanyName.info).to.equal('This is the updated companyName!!!');
    });

  });

  describe('DELETE /api/companyNames/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/companyNames/' + newCompanyName._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when companyName does not exist', function(done) {
      request(app)
        .delete('/api/companyNames/' + newCompanyName._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
