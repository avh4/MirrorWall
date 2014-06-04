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
    expect($('div').text()).to.eql('Project wall');
  });
});