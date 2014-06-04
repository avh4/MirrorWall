/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var props = ReactTest.mock.props;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');
ReactTest.mock(MirrorWall, 'AddProjectView');
var projects;
var ProjectService = {
  subscribe: function(callback) { callback(projects) }
};
MirrorWall.__set__('ProjectService', ProjectService);

describe('MirrorWall', function() {
  it('shows projects', function(done) {
    projects = ['Project wall'];
    ReactTest.render(<MirrorWall/>);
    setTimeout(function() {
      expect(props('#ProjectsView1').projects).to.eql(['Project wall']);
      done();
    });
  });

  it('shows the add project widget', function() {
    ReactTest.render(<MirrorWall/>);
    expect($('#AddProjectView1').length).to.eql(1);
  });
});