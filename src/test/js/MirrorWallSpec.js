/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var props = ReactTest.mock.props;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');
ReactTest.mock(MirrorWall, 'AddProjectView');

describe('MirrorWall', function() {
  it('shows projects', function() {
    ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect(props($('#ProjectsView')).projects).to.eql(['Project wall']);
  });

  it('shows the add project widget', function() {
    ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect($('#AddProjectView').length).to.eql(1);
  });
});