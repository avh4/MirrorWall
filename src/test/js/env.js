global.rewire = require('rewire');
global.sinon = require('sinon');
global.chai = require('chai');
global.chai.use(require('sinon-chai'));
global.expect = chai.expect;

global.Dropbox = new (require('./FakeDropbox'))();
global.Dropbox.allowAppKey('hzy00wu1zd7neiv');