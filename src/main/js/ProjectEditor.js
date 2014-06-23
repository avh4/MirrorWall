"use strict";

var mercury = require('mercury');
var h = mercury.h;

var ProjectEditor = {};

ProjectEditor.render = function(project, onUpdate) {
  // var name = project.get('name');
//   return h('div.project-card', {'ev-click': mercury.event(editProject, project)}, [
//     h('span.name', name),
//     h('button.delete', {
//       'ev-click': mercury.event(deleteProject, project)
//     },
//       h('i.fa.fa-times'))
//   ]);
onUpdate('SDFS');
  return h('.project-card', [
    h('input.name', {value: project.get('name'), 'ev-change': mercury.event(onEdit)}),
    h('button.done', {'ev-click': mercury.event(onUpdate, project)}, 'Done')
  ]);
};

module.exports = ProjectEditor;