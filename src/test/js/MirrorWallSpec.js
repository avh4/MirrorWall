/** @jsx React.DOM */

var ReactTest = require('./ReactTest');
var expect = require('chai').expect;

describe('MirrorWall', function() {
  it('show projects', function() {
    var MirrorWall = require('../../main/js/MirrorWall');
    var $ = require('cheerio').load(ReactTest.renderString(<MirrorWall/>));
    expect($('.project-card').text()).to.equal('Project wall');
  });
});