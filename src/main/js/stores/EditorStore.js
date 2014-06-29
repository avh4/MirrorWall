'use strict';

var varhash = require('observ-varhash');

module.exports = function(events, ProjectStore) {
  var editors = varhash();
  function edit(projectId, field, value) {
    var editor = editors.get(projectId);
    editor[field] = value;
    editors.put(projectId, editor);
  }
  events.editProject(function(project) {
    editors.put(project.id, { id: project.id, name: project.name, _entity: project._entity });
  });
  events.editProjectName(function(data) {
    edit(data.projectId, 'name', data.name);
  });
  events.editProjectColor(function(projectId, color) {
    edit(projectId, 'color', color);
  });
  events.commitProject(function(projectId) {
    var editor = editors.get(projectId);
    var entity = editor._entity;
    entity.update({name: editor.name});
    editors.delete(projectId);
  });
  return editors;
};