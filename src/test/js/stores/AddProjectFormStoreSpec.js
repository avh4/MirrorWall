require('../env');

var DropboxService = {
  insert: sinon.spy()
};

var AddProjectFormStore = subject('../../main/js/stores/AddProjectFormStore', {
  DropboxService: DropboxService
});

describe('AddProjectFormStore', function() {
  var subject;

  beforeEach(function() {
    subject = AddProjectFormStore();
  });

  describe('adding the project', function() {
    beforeEach(function() {
      subject.events.edit({name: 'Amazing Race'});
      subject.events.commit();
    });

    it('adds the project', function() {
      expect(DropboxService.insert).to.have.been.calledWith('projects', {name: 'Amazing Race'});
    });

    it('clears the name input', function() {
      expect(subject.state()).to.equal('');
    });
  });
});
