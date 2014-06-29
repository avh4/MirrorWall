require('./env');
var ProjectCard = subject('../../main/js/ProjectCard');

describe('ProjectCard', function() {
  var $;
  var project;
  var events;

  beforeEach(function() {
    events = {
      editProject: sinon.spy(),
      ProjectStore: { delete: sinon.spy() }
    };
    project = { id: 'FAKE_PROJECT_ID', name: 'Project wall' };
    $ = new MercuryTest(ProjectCard, project, events);
  });

  it('shows the project name', function() {
    expect($('.name').text()).to.eql('Project wall');
  });

  describe('tapping delete', function() {
    it('deletes the project', function() {
      $('.delete').click();
      expect(events.ProjectStore.delete).to.have.been.calledWith(project);
    });
  });

  describe('tapping the card', function() {
    it('switches to edit mode', function() {
      $('.project-card').click();
      expect(events.editProject).to.have.been.calledWith(project);
    });
  });
});