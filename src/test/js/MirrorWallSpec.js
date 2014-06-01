/** @jsx React.DOM */

var rewire = require('rewire');
var ReactTest = require('./ReactTest');
var props = ReactTest.mock.props;
var expect = require('chai').expect;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');

describe('MirrorWall', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect(props($('#ProjectsView')).projects).to.eql(['Project wall']);
  });
});