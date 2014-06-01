/** @jsx React.DOM */

var rewire = require('rewire');
var ReactTest = require('./ReactTest');
var expect = require('chai').expect;
var MirrorWall = rewire('../../main/js/MirrorWall');

var React = require('react');

function stubComponent(subject, componentNameToMock) {
  var mock = React.createClass({
    render: function() {
      return <div id={componentNameToMock}>{JSON.stringify(this.props)}</div>;
    }
  });
  MirrorWall.__set__(componentNameToMock, mock);
}

stubComponent(MirrorWall, 'ProjectsView');

function component(element) {
  return JSON.parse(element.text());
}

describe('MirrorWall', function() {
  it('shows projects', function() {
    var $ = ReactTest.render(<MirrorWall projects={['Project wall']}/>);
    expect(component($('#ProjectsView')).projects).to.eql(['Project wall']);
  });
});