'use strict';

var varhash = require('observ-varhash');
var input = require('geval/single');

module.exports = function(ProjectStore) {
  var editors = varhash();
  var events = {
    startEditing: input(), // project
    updateName: input(), // project id, name
    // updateColor: input(), // project id, color
    commit: input(), // project id
  };

  function edit(projectId, field, value) {
    var editor = editors.get(projectId);
    editor[field] = value;
    editors.put(projectId, editor);
  }
  events.startEditing(function(project) {
    editors.put(project.id, { id: project.id, name: project.name, _entity: project._entity });
  });
  events.updateName(function(data) {
    edit(data.projectId, 'name', data.name);
  });
  // events.updateColor(function(projectId, color) {
  //   edit(projectId, 'color', color);
  // });
  events.commit(function(projectId) {
    var editor = editors.get(projectId);
    var entity = editor._entity;
    entity.update({name: editor.name});
    editors.delete(projectId);
  });
  return {state: editors, events: events};
};