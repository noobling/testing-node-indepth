process.env.NODE_ENV = 'test';

const fs = require('fs');
const path = require('path');
const chai = require('chai');
const should = chai.should();

const usersController = require('../../src/server/controllers/users');

describe('controllers : users', () => {

  describe('filterByYear() with helper', () => {
    it('should return all users created on or after (>=) specified year',
    (done) => {
      const testDataFile = path.join(
        __dirname, '..', 'test.data.json');
      fs.readFile(testDataFile, 'utf8', (err, data) => {
        usersController.filterByYear(
          JSON.parse(data), 2015, (err, total) => {
          should.not.exist(err);
          total.length.should.eql(5);
          done();
        });
      });
    });
  });

});
