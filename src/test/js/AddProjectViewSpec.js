/** @jsx React.DOM */

require('./env');
var ReactTest = require('./ReactDomTest');
var AddProjectView = rewire('../../main/js/AddProjectView');

AddProjectView.__set__('ProjectService', ProjectService = {
  add: sinon.spy()
});

describe('AddProjectView', function() {
  beforeEach(function(done) {
    ReactTest.reset(done);
  });

  describe('tapping the add button', function() {
    beforeEach(function() {
      ReactTest.render(<AddProjectView/>);
      ReactTest.input('input', 'Amazing Race');
      ReactTest.click('button');
    });

    it('adds the project', function() {
      expect(ProjectService.add).to.have.been.calledWith('Amazing Race');
    });

    it('clears the name input', function() {
      expect($('input').val()).to.equal('');
    });
  });
});