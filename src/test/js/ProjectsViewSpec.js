/** @jsx React.DOM */

var ReactTest = require('./ReactTest');
var expect = require('chai').expect;
var ProjectsView = require('../../main/js/ProjectsView');

describe('ProjectsView', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<ProjectsView projects={['Project wall']}/>);
    expect($('.project-card').text()).to.eql('Project wall');
  });

  it('shows all projects', function() {
    var $ = ReactTest.render(<ProjectsView projects={['Project wall', 'Econ 101']}/>);
    function getName(card) {
      return $(card).text();
    }
    expect($('.project-card').get().map(getName)).to.eql(['Project wall', 'Econ 101']);
  });

  describe('with no data', function() {
    it('shows a message', function() {
      var $ = ReactTest.render(<ProjectsView/>);
      expect($('div').text()).to.eql('No project data provided');
    });
  });
});