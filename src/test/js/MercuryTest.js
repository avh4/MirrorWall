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
  var render, renderArgs;
  if (arguments.length == 1) {
    var component = arguments[0];
    var render = component.render;
    var renderArgs = [component.state()];
  } else {
    var render = arguments[0];
    var renderArgs = Array.prototype.slice.call(arguments).slice(1);
  }
  var document = new Document();
  var elem = document.createElement('div');
  document.body.appendChild(elem);
  if (renderArgs.length == 1) {
    mercury.app(elem, renderArgs[0], render, {document: document});
  } else {
    var opts = {document: document};
    mercury.Delegator(opts);
    var loop = mercury.main(renderArgs, function(args) { return render.apply(null, args) }, opts);
    elem.appendChild(loop.target);
    // observ(loop.update)
  }
  return $.bind(null, document, elem);
}

module.exports = MercuryTest;
