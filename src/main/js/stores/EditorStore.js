var varhash = require('observ-varhash');

module.exports = function(events) {
  var editors = varhash();
  events.editProjectName(function(projectId, name) {
    editors.put(projectId, {name: name}); // XXX
  });
  events.editProjectColor(fuction(projectId, color) {
    // editors[projectId].color = color;
    throw new Error('Not implemented');
  });
  events.commitProject(function(projectId) {
    console.log("COMMIT", editors.get(projectId);
    editors.delete(projectId);
  });
  return { editors: editors };
};