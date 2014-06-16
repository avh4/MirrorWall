require('./env');
var ProjectCard = subject('../../main/js/ProjectCard');

function p(name) {
  return {
    get: sinon.stub().withArgs('name').returns(name)
  };
}

describe('ProjectCard', function() {
  var $;
  var onDelete;
  var project;

  beforeEach(function() {
    onDelete = sinon.spy();
    project = p('Project wall');
    $ = new MercuryTest(ProjectCard.render, project, onDelete);
  });

  it('shows the project name', function() {
    expect($('.name').text()).to.eql('Project wall');
  });

  describe('tapping delete', function() {
    it('deletes the project', function() {
      $('.delete').click();
      expect(onDelete).to.have.been.calledWith(project);
    });
  });
});