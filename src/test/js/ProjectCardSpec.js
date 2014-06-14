require('./env');
var ProjectCard = subject('../../main/js/ProjectCard');

function p(name) {
  return {
    get: sinon.stub().withArgs('name').returns(name),
    deleteRecord: sinon.spy()
  };
}

function getName(card) {
  return props(card).name;
}

describe('ProjectCard', function() {
  it('shows the project name', function() {
    var $ = new MercuryTest(ProjectCard.render, mercury.value(p('Project wall')));
    expect($('.name').text()).to.eql('Project wall');
  });

  describe('tapping delete', function() {
    it('deletes the project', function() {
      var project = p('DELETE ME!');
      var $ = new MercuryTest(ProjectCard.render, mercury.value(project));
      $('.delete').click();
      expect(project.deleteRecord).to.have.been.called;
    });
  });
});