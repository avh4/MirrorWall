require('./env');
var ProjectCard = subject('../../main/js/ProjectEditor');

describe('ProjectEditor', function() {
  var $;
  var projectId = 'PID';
  var events;

  beforeEach(function() {
    events = {
      EditorStore: {
        commit: sinon.spy(),
        updateName: sinon.spy()
      }
    };
    $ = new MercuryTest(ProjectCard, projectId, { name: 'Project wall' }, events);
  });

  it('shows the project name', function() {
    expect($('input.name-input').val()).to.eql('Project wall');
  });

  describe('tapping done', function() {
    it('sends event', function() {
      $('.done').click();
      expect(events.EditorStore.commit).to.have.been.calledWith(projectId);
    });
  });

  describe('editing the name', function() {
    it('sends event', function() {
      $('.name-input').input('Amazing Race')
      expect(events.EditorStore.updateName).to.have.been.calledWith({projectId: projectId, name: 'Amazing Race'});
    });
  });
});