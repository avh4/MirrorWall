/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var ProjectsView = require('../../main/js/ProjectsView');

function p(name) {
  return { get: sinon.stub().withArgs('name').returns(name) };
}

function getName(card) {
  return $(card).text();
}

describe('ProjectsView', function() {
  it('shows projects', function() {
    ReactTest.render(<ProjectsView projects={[p('Project wall')]}/>);
    expect($('.project-card').text()).to.eql('Project wall');
  });

  it('shows all projects', function() {
    ReactTest.render(<ProjectsView projects={[p('Project wall'), p('Econ 101')]}/>);
    expect($('.project-card').get().map(getName)).to.eql(['Project wall', 'Econ 101']);
  });

  describe('with no data', function() {
    it('shows a message', function() {
      ReactTest.render(<ProjectsView/>);
      expect($('div').text()).to.eql('No project data provided');
    });
  });
});