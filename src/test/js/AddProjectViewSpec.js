require('./env');
var MercuryTest = require('./MercuryTest');
var AddProjectView = require('../../main/js/AddProjectView');

// AddProjectView.__set__('ProjectService', ProjectService = {
//   add: sinon.spy()
// });

var mercury = require('mercury');
var event = require('synthetic-dom-events');
var Document = require('min-document/document');

describe('AddProjectView', function() {
  describe('tapping the add button', function() {
    var $;
    
    beforeEach(function(done) {
      var document = new Document();
      var component = AddProjectView;
      var div = document.createElement('div');
      document.body.appendChild(div);
      mercury.app(div, new component().state, component.render, {document: document});
      $ = function(selector) {
        console.log(div.toString());
        return require('cheerio').load(div.toString())(selector);
      };
      
      //   MercuryTest.input('input', 'Amazing Race');
      document.getElementsByClassName('add-field')[0].value = 'Amazing Race';
      //   MercuryTest.click('button');
      document.getElementsByClassName('add-button')[0].dispatchEvent(event('click'));
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

// // JSDOM
// // 
// // require('./env');
// // var MercuryTest = require('./MercuryTest');
// // var AddProjectView = require('../../main/js/AddProjectView');
// 
// // AddProjectView.__set__('ProjectService', ProjectService = {
//   // add: sinon.spy()
// // });
// var jsdom = require('jsdom').jsdom;
// var mercury = mercury = require('mercury');
// var h = mercury.h;
// var event = require('synthetic-dom-events');
// 
// var callCount = 0;
// 
// var click = mercury.input();
// click(function() { callCount++; });
// function render(onClick) {
//  return h('button', {'ev-click': mercury.event(onClick)}, 'Click Me');
// };
// 
// describe('integration tests', function() {
//   var document, $;
//   
//   beforeEach(function(done) {
//     var doc = jsdom('<html><body></body></html>');
//     var window = doc.parentWindow;
//     document = window.document;
//     jsdom.jQueryify(doc.parentWindow, "../../../node_modules/jquery/dist/jquery.js", function() {
//       $ = window.$;
//       done();
//     });
//   });
// 
//   describe('clicking the button', function() {
//     beforeEach(function(done) {
//       var div = document.createElement('div');
//       mercury.app(div, mercury.value(click), render, {document: document});
//       document.body.appendChild(div);
//       // global.$ = function(selector) {
//       //   return window.$(div).find(selector);
//       // }
//       // Here, I would expect my rendered component to have been appended to `div`, but `div` is still empty
//       // console.log(div.innerHTML);
//       // window.$('input').val('Amazing Race');
//       console.log($('div').html());
//       $('button').click();
//       $('button').trigger('click');
//       setTimeout(done);
//     });
//   
//     it('increments the counter', function() {
//       // expect($('input').val()).to.equal('');
//       expect(callCount).to.equal(1);
//     });    
//   });
// });