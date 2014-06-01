/** @jsx React.DOM */

var rewire = require('rewire');
var ReactTest = require('./ReactDomTest');
var sinon = require('sinon');
var chai = require("chai");
chai.use(require("sinon-chai"));
var expect = chai.expect;
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
      var subject = ReactTest.render(<AddProjectView/>);
      $(subject).find('input').val('Amazing Race');
      ReactTest.click(subject, 'button');
    });

    it('adds the project', function() {
      expect(ProjectService.add).to.have.been.calledWith('Amazing Race');
    });
  });
});