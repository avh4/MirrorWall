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
    var subject;
    beforeEach(function() {
      var component = <AddProjectView/>;
      subject = ReactTest.render(component);
      ReactTest.input(subject, 'input', 'Amazing Race');
      ReactTest.click(subject, 'button');
    });

    it('adds the project', function() {
      expect(ProjectService.add).to.have.been.calledWith('Amazing Race');
    });

    it('clears the name input', function() {
      expect($(subject).find('input').val()).to.equal('');
    });
  });
});