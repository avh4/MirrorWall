/** @jsx React.DOM */

var rewire = require('rewire');
var ReactTest = require('./ReactTest');
var expect = require('chai').expect;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');

function component(element) {
  return JSON.parse(element.text());
}

describe('MirrorWall', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect(component($('#ProjectsView')).projects).to.eql(['Project wall']);
  });
});