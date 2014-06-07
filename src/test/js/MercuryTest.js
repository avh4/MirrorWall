'use strict';

var jsdom = require('jsdom').jsdom;

exports.reset = function(done) {
  // var doc = jsdom('<html><body></body></html>');
  // global.window = doc.parentWindow;
  // global.document = window.document;
  // global.navigator = window.navigator;
  // global.$ = undefined;
  // if (done) {
  //   jsdom.jQueryify(doc.parentWindow, "../../../bower_components/jquery/dist/jquery.js", function () {
      done();
  //   });
  // }
}

// exports.reset();
var mercury = require('mercury');

exports.render = function(component) {
  mercury.app(div, new component().state, component.render);
  global.$ = function(selector) {
    return window.$(div).find(selector);
  }
  console.log('doc', document.body.toString());
  return div;
}

exports.click = function(selector) {
  ReactTestUtils.Simulate.click($(selector).get(0));
}

exports.input = function(selector, value) {
  var target = $(selector).get(0);
  target.val(value);
  target.trigger('change');
  // ReactTestUtils.Simulate.change(target, { target: { value: value }});
}

exports.mock = function(subject, componentNameToMock, _propsToJson) {
  var propsToJson = _propsToJson || function() { return this };
  if (typeof subject.__set__ != 'function') {
    throw new Error('ReactTest.mock subjects must use rewire');
  }
  var nextId = 1;
  var mock = React.createClass({
    render: function() {
      return React.DOM.div({id: componentNameToMock + nextId, className: componentNameToMock}, JSON.stringify(propsToJson.bind(this.props)()));
    }
  });
  subject.__set__(componentNameToMock, mock);
}

exports.mock.props = function(selector) {
  var element = $(selector);
  if (!element.length) throw new Error('No matching element found');
  return JSON.parse(element.text());
}
