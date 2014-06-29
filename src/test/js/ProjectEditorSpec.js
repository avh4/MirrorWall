require('./env');
var ProjectCard = subject('../../main/js/ProjectEditor');

describe('ProjectEditor', function() {
  var $;
  var projectId = 'PID';
  var events;

  beforeEach(function() {
    events = {
      commitProject: sinon.spy(),
      editProjectName: sinon.spy(),
      editProject: sinon.spy()
    };
    $ = new MercuryTest(ProjectCard, projectId, { name: 'Project wall' }, events);
  });

  it('shows the project name', function() {
    expect($('input.name-input').val()).to.eql('Project wall');
  });

  describe('tapping done', function() {
    it('sends event', function() {
      $('.done').click();
      expect(events.commitProject).to.have.been.calledWith(projectId);
    });
  });

  describe('editing the name', function() {
    it('sends event', function() {
      $('.name-input').input('Amazing Race')
      expect(events.editProjectName).to.have.been.calledWith({projectId: projectId, name: 'Amazing Race'});
    });
  });
});