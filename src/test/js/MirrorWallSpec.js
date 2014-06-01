/** @jsx React.DOM */

var ReactTest = require('./ReactTest');
var expect = require('chai').expect;
var MirrorWall = require('../../main/js/MirrorWall');

describe('MirrorWall', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect($('.project-card').text()).to.eql('Project wall');
  });
});