/*
 * apitests.js
 *
 * AWS API Gateway Test Suite.
 */
const should = require('should');
const assert = require('assert');
const request = require('supertest');

const baseURL = '{API_URL}';

describe('testSuite', function() {
  /*
   * Test save data.
   */
  describe('saveData', function() {
    describe('testSaveData', function() {
      it('should return successfully', function(done) {
        const params = {
          data: 'some data',
        };
        request(baseURL)
        .post('/save')
        .send(params)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          res.status.should.be.equal(200);
          done();
        });
      });
    });
  });
});
