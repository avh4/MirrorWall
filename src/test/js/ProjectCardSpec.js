/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var props = ReactTest.mock.props;
var ProjectCard = rewire('../../main/js/ProjectCard');

function p(name) {
  return { get: sinon.stub().withArgs('name').returns(name) };
}

function getName(card) {
  return props(card).name;
}

describe('ProjectCard', function() {
  beforeEach(ReactTest.reset);

  it('shows the project name', function() {
    ReactTest.render(<ProjectCard project={p('Project wall')}/>);
    expect($('.name').text()).to.eql('Project wall');
  });

  describe('tapping delete', function() {
    it('deletes the project', function() {
      var project = p('DELETE ME!');
      project.deleteRecord = sinon.spy();
      ReactTest.render(<ProjectCard project={project}/>);
      ReactTest.click('button.delete');
      expect(project.deleteRecord).to.have.been.called;
    });
  });
});