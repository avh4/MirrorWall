/** @jsx React.DOM */

var ReactTest = require('./ReactTest');
var expect = require('chai').expect;
var MirrorWall = require('../../main/js/MirrorWall');

describe('MirrorWall', function() {
  it('show projects', function() {
    var $ = ReactTest.render(<MirrorWall/>);
    expect($('.project-card').text()).to.equal('Project wall');
  });
});