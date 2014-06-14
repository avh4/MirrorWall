require('./env');

var ProjectCard = {
  render: function(project) {
    return '%Project:' + project.get('name');
  }
};

var ProjectsView = subject('../../main/js/ProjectsView', {
  ProjectCard: ProjectCard
});

function p(name) {
  return { get: sinon.stub().withArgs('name').returns(name) };
}

describe('ProjectsView', function() {
  it('shows projects', function() {
    var p1 = p('Project wall');
    var $ = new MercuryTest(ProjectsView.render, mercury.value([p1]));
    expect($('div.row div').text()).to.equal('%Project:Project wall');
  });

  it('shows all projects', function() {
    var p1 = p('Project wall');
    var p2 = p('Econ 101');
    var $ = new MercuryTest(ProjectsView.render, mercury.value([p1, p2]));
    expect($('div.row div').first().text()).to.equal('%Project:Project wall');
    expect($('div.row div').last().text()).to.equal('%Project:Econ 101');
  });

  describe('with no data', function() {
    it('shows a message', function() {
      var $ = new MercuryTest(ProjectsView.render, mercury.value());
      expect($('div').first().text()).to.eql('No project data provided');
    });
  });
});