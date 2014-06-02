/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var props = ReactTest.mock.props;
var MirrorWall = rewire('../../main/js/MirrorWall');

ReactTest.mock(MirrorWall, 'ProjectsView');
ReactTest.mock(MirrorWall, 'AddProjectView');
var projectsDefer = Q.defer();
var ProjectService = {
  getAll: sinon.stub().returns(projectsDefer.promise)
};
MirrorWall.__set__('ProjectService', ProjectService);

describe('MirrorWall', function() {
  it('shows projects', function(done) {
    projectsDefer.resolve(['Project wall']);
    ReactTest.render(<MirrorWall/>);
    setTimeout(function() {
      expect(props($('#ProjectsView')).projects).to.eql(['Project wall']);
      done();
    });
  });

  it('shows the add project widget', function() {
    ReactTest.render(<MirrorWall/>);
    expect($('#AddProjectView').length).to.eql(1);
  });
});