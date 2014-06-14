global.rewire = require('rewire');
global.sinon = require('sinon');
global.Q = require('q');
global.cheerio = require('cheerio');
global.mercury = require('mercury');
global.h = mercury.h;

global.chai = require('chai');
global.chai.use(require('sinon-chai'));
global.chai.use(require("chai-as-promised"));
global.expect = chai.expect;

global.Dropbox = new (require('dropbox-mock'))();
global.Dropbox.allowAppKey('hzy00wu1zd7neiv');

global.subject = require('./TestSubject');
global.MercuryTest = require('./MercuryTest');
