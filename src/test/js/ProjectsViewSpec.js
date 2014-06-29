require('./env');

describe('ProjectsView', function() {
  var p1 = { name: 'Project wall', id: 'ID_PW' };
  var p2 = { name: 'Econ 101', id: 'ID_E1'};
  var events = '__FAKE_EVENTS__';
  var $;
  var ProjectsView;
  var ProjectCard;
  var ProjectEditor;
  
  beforeEach(function() {
    ProjectCard = MercuryTest.stub('ProjectCard');
    ProjectEditor = MercuryTest.stub('ProjectEditor');

    ProjectsView = subject('../../main/js/ProjectsView', {
      ProjectCard: ProjectCard,
      ProjectEditor: ProjectEditor
    });
  });
  
  it('shows projects', function() {
    var $ = new MercuryTest(ProjectsView, [p1], {}, events);
    expect(ProjectCard).to.have.been.calledWith(p1);
    expect($('div.row div #ProjectCard0').text()).to.equal('%ProjectCard:0%');
  });

  it('shows all projects', function() {
    var $ = new MercuryTest(ProjectsView, [p1, p2], {}, events);
    expect(ProjectCard).to.have.been.calledWith(p1);
    expect(ProjectCard).to.have.been.calledWith(p2);
    expect($('div.row div').first().text()).to.equal('%ProjectCard:0%');
    expect($('div.row div').last().text()).to.equal('%ProjectCard:1%');
  });

  it('shows editors', function() {
    var editors = {};
    editors[p1.id] = '__EDITOR_STATE__';
    var $ = new MercuryTest(ProjectsView, [p1, p2], editors, events);
    expect($('div.row div').first().text()).to.equal('%ProjectEditor:0%');
    expect(ProjectEditor).to.have.been.calledWith(p1.id, '__EDITOR_STATE__', events);
  });

  describe('with no data', function() {
    it('shows a message', function() {
      var $ = new MercuryTest(ProjectsView, [], {}, events);
      expect($('div').first().text()).to.eql('No project data provided');
    });
  });
});