require('./env');

var ProjectCard = {
  render: function(project) {
    return '%Project:' + project.get('name');
  }
};

var ProjectEditor = {
  render: function(project) {
    return '%ProjectEditor:' + project.get('name');
  }
};

var ProjectsView = subject('../../main/js/ProjectsView', {
  ProjectCard: ProjectCard,
  ProjectEditor: ProjectEditor
});

function p(name) {
  return {
    getId: function() { return name },
    get: sinon.stub().withArgs('name').returns(name)
  };
}

describe('ProjectsView', function() {
  var p1 = p('Project wall');
  var p2 = p('Econ 101');
  var $;
  var editors;
  
  beforeEach(function() {
    editors = {};
  });
  
  it('shows projects', function() {
    var $ = new MercuryTest(ProjectsView.render, [p1], undefined, undefined, {});
    expect($('div.row div').text()).to.equal('%Project:Project wall');
  });

  it('shows all projects', function() {
    var $ = new MercuryTest(ProjectsView.render, [p1, p2], undefined, undefined, {});
    expect($('div.row div').first().text()).to.equal('%Project:Project wall');
    expect($('div.row div').last().text()).to.equal('%Project:Econ 101');
  });
  
  it('shows editors', function() {
    editors[p1.getId()] = {};
    var $ = new MercuryTest(ProjectsView.render, [p1, p2], undefined, undefined, editors);
    expect($('div.row div').first().text()).to.equal('%ProjectEditor:Project wall');
  });

  describe('with no data', function() {
    it('shows a message', function() {
      var $ = new MercuryTest(ProjectsView.render, mercury.value());
      expect($('div').first().text()).to.eql('No project data provided');
    });
  });
});