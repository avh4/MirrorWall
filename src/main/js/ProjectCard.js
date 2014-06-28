var mercury = require('mercury');
var h = mercury.h;

module.exports = function(project, events) {
  var name = project.name;
  return h('div.project-card', {'ev-click': mercury.event(events.editProject, project)}, [
    h('span.name', name),
    h('button.delete', {
      'ev-click': mercury.event(events.deleteProject, project.id)
    },
      h('i.fa.fa-times'))
  ]);
};
