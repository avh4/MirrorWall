global.rewire = require('rewire');
global.sinon = require('sinon');
global.chai = require('chai');
global.chai.use(require('sinon-chai'));
global.expect = chai.expect;
global.Q = require('q');

global.Dropbox = new (require('dropbox-mock'))();
global.Dropbox.allowAppKey('hzy00wu1zd7neiv');

global.check = function(promise, done, expected) {
  promise.then(function(actual) {
    try {
      expect(actual).to.eql(expected);
      done();
    } catch (e) {
      done(e);
    }
  });
}