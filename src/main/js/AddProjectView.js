"use strict";

var ProjectService = require('./ProjectService');

var mercury = require('mercury');
var h = mercury.h;

var AddProjectView = {};

AddProjectView.state = function() {
  var state = mercury.struct({
    input: mercury.value(''),
    onChange: mercury.value(mercury.input()),
    onAdd: mercury.value(mercury.input())
  });

  state.onChange()(function(data) {
    state.input.set(data.name);
  });

  state.onAdd()(function() {
    ProjectService.add(state.input());
    state.input.set('');
  });

  return state;
};

AddProjectView.render = function(state) {
  return h('div', {class: 'row'}, [
    h('input', {value: state.input, name: 'name', className: 'add-field',
      'ev-event': mercury.changeEvent(state.onChange)
    }),
    h('button', {'className': 'add-button', 'ev-click': mercury.event(state.onAdd)}, 'Add')
  ]);
};

module.exports = AddProjectView;