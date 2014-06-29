require('./env');

var AddProjectView = subject('../../main/js/AddProjectView');

describe('AddProjectView', function() {
  var $;
  var events;

  beforeEach(function() {
    events = { edit: sinon.spy(), commit: sinon.spy() };
    $ = new MercuryTest(AddProjectView, {}, events);
  });

  describe('typing in the field', function() {
    it('sends event', function() {
      $('.add-field').input('Amazing Race');
      expect(events.edit).to.have.been.calledWith({name: 'Amazing Race'});
    });
  });

  describe('tapping the add button', function() {
    it('sends event', function() {
      $('.add-button').click();
      expect(events.commit).to.have.been.called;
    });
  });
});
