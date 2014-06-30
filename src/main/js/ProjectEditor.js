"use strict";

var mercury = require('mercury');
var h = mercury.h;
var doMutableFocus = require('./do-mutable-focus')

module.exports = function(projectId, editor, events) {
  return h('.project-card', [
    h('input.name-input', {value: editor.name, name: 'name', 'ev-event': mercury.changeEvent(events.EditorStore.updateName, {projectId: projectId}), 'ev-focus': doMutableFocus()}),
    h('button.done', {'ev-click': mercury.event(events.EditorStore.commit, projectId)}, 'Done')
  ]);
};
