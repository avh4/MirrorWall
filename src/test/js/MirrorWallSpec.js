/** @jsx React.DOM */

var rewire = require('rewire');
var ReactTest = require('./ReactTest');
var props = ReactTest.mock.props;
var expect = require('chai').expect;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');
ReactTest.mock(MirrorWall, 'AddProjectView');

describe('MirrorWall', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect(props($('#ProjectsView')).projects).to.eql(['Project wall']);
  });

  it('shows the add project widget', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect($('#AddProjectView').length).to.eql(1);
  });
});