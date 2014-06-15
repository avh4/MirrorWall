'use strict';

var mercury = require('mercury');
var event = require('synthetic-dom-events');
var Document = require('min-document/document');
var cheerio = require('cheerio');

function $(document, elem, selector) {
  var result = cheerio.load(elem.toString())(selector);
  var className = undefined;
  if (selector[0] === '.') {
    className = selector.substring(1);
  }
  result.input = function(text) {
    if (!className) throw new Error('only currently implemented for class selectors');
    document.getElementsByClassName(className)[0].value = text;
    document.getElementsByClassName(className)[0].dispatchEvent(event('input'));
  };
  result.click = function() {
    if (!className) throw new Error('only currently implemented for class selectors');
    document.getElementsByClassName(className)[0].dispatchEvent(event('click'));
  };
  return result;
};

function MercuryTest(/*...*/) {
  var state, render;
  if (arguments.length == 1) {
    var component = arguments[0];
    var state = component.state();
    var render = component.render;
  } else {
    var render = arguments[0];
    var state = arguments[1];
  }
  var document = new Document();
  var div = document.createElement('div');
  document.body.appendChild(div);
  mercury.app(div, state, render, {document: document});
  return $.bind(null, document, div);
}

module.exports = MercuryTest;
