require('./env');

var ProjectService = {
  add: sinon.spy()
};

var AddProjectView = subject('../../main/js/AddProjectView', {
  ProjectService: ProjectService
});

describe('AddProjectView', function() {
  describe('tapping the add button', function() {
    var $;
    
    beforeEach(function(done) {
      $ = new MercuryTest(AddProjectView.render, AddProjectView.state());
      
      $('.add-field').input('Amazing Race');
      $('.add-button').click();
      setTimeout(done);
    });
    
    it('adds the project', function() {
      expect(ProjectService.add).to.have.been.calledWith('Amazing Race');
    });
    
    it('clears the name input', function() {
      expect($('input').val()).to.equal('');
    });
  });
});
