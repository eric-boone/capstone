'use strict';

var app = require('../..');
import request from 'supertest';

var newJob;

describe('Job API:', function() {

  describe('GET /api/jobs', function() {
    var jobs;

    beforeEach(function(done) {
      request(app)
        .get('/api/jobs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          jobs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(jobs).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/jobs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/jobs')
        .send({
          name: 'New Job',
          info: 'This is the brand new job!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newJob = res.body;
          done();
        });
    });

    it('should respond with the newly created job', function() {
      expect(newJob.name).to.equal('New Job');
      expect(newJob.info).to.equal('This is the brand new job!!!');
    });

  });

  describe('GET /api/jobs/:id', function() {
    var job;

    beforeEach(function(done) {
      request(app)
        .get('/api/jobs/' + newJob._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          job = res.body;
          done();
        });
    });

    afterEach(function() {
      job = {};
    });

    it('should respond with the requested job', function() {
      expect(job.name).to.equal('New Job');
      expect(job.info).to.equal('This is the brand new job!!!');
    });

  });

  describe('PUT /api/jobs/:id', function() {
    var updatedJob;

    beforeEach(function(done) {
      request(app)
        .put('/api/jobs/' + newJob._id)
        .send({
          name: 'Updated Job',
          info: 'This is the updated job!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedJob = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedJob = {};
    });

    it('should respond with the updated job', function() {
      expect(updatedJob.name).to.equal('Updated Job');
      expect(updatedJob.info).to.equal('This is the updated job!!!');
    });

  });

  describe('DELETE /api/jobs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/jobs/' + newJob._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when job does not exist', function(done) {
      request(app)
        .delete('/api/jobs/' + newJob._id)
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
