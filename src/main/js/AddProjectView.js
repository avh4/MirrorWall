"use strict";

var mercury = require('mercury');
var h = mercury.h;

module.exports = function(state, events) {
  return h('div.row', [
    h('input.add-field', {value: state, name: 'name', 'ev-event': mercury.changeEvent(events.editAddFormName) }),
    h('button.add-button', {'ev-click': mercury.event(events.addProject) }, 'Add')
  ]);
};