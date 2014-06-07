"use strict";

var ProjectService = require('./ProjectService');

var mercury = require('mercury');
var h = mercury.h;

function AddProjectView() {
  var events = mercury.input(['change', 'add']);
  var state = mercury.struct({
    input: mercury.value(''),
    events: events
  });

  events.change(function(data) {
    state.input.set(data.name);
  });

  events.add(function() {
    ProjectService.add(state.input());
    state.input.set('');
  });

  return { state: state };
}

AddProjectView.render = function(state) {
  return h('div', {class: 'row'}, [
    h('input', {value: state.input, name: 'name', className: 'add-field',
      'ev-event': mercury.changeEvent(state.events.change)
    }),
    h('button', {'className': 'add-button', 'ev-click': mercury.event(state.events.add)}, 'Add')
  ]);
};

module.exports = AddProjectView;