require('./env');
var ProjectCard = subject('../../main/js/ProjectEditor');

function p(name) {
  return {
    get: sinon.stub().withArgs('name').returns(name)
  };
}

describe('ProjectEditor', function() {
  var $;
  var onUpdate;
  var project;

  beforeEach(function() {
    onUpdate = sinon.spy();
    project = p('Project wall');
    $ = new MercuryTest(ProjectCard.render, project, onUpdate);
  });

  it('shows the project name', function() {
    expect($('input.name').val()).to.eql('Project wall');
  });

  describe('tapping done', function() {
    it.only('updates the project name', function() {
      $('.name').input('Amazing Race')
      $('.done').click();
      expect(onUpdate).to.have.been.calledWith(project, 'Amazing Race');
    });
  });
  //
  // describe('tapping the card', function() {
  //   it('switches to edit mode', function() {
  //     $('.project-card').click();
  //     expect(onEdit).to.have.been.calledWith(project);
  //   });
  // });
});