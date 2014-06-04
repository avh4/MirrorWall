/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var props = ReactTest.mock.props;
var ProjectsView = rewire('../../main/js/ProjectsView');

ReactTest.mock(ProjectsView, 'ProjectCard', function() { return { name: this.project.get('name') } });

function p(name) {
  return { get: sinon.stub().withArgs('name').returns(name) };
}

function getName(card) {
  return props(card).name;
}

describe('ProjectsView', function() {
  beforeEach(ReactTest.reset);

  it('shows projects', function() {
    ReactTest.render(<ProjectsView projects={[p('Project wall')]}/>);
    expect(props('#ProjectCard1').name).to.equal('Project wall');
  });

  it('shows all projects', function() {
    ReactTest.render(<ProjectsView projects={[p('Project wall'), p('Econ 101')]}/>);
    expect($('.ProjectCard').get().map(getName)).to.eql(['Project wall', 'Econ 101']);
  });

  describe('with no data', function() {
    it('shows a message', function() {
      ReactTest.render(<ProjectsView/>);
      expect($('div').text()).to.eql('No project data provided');
    });
  });
});