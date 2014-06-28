var DropboxService = require('../dropbox/DropboxService');
var value = require('observ');

module.exports = function(events) {
  var state = { projects: value([]) };
  var projectIndex = {};

  events.deleteProject(function(projectId) {
    projectIndex[projectId].deleteRecord();
  });

  DropboxService.subscribe('projects', function() {
    DropboxService.query('projects').then(function(projects) {
      projectIndex = {};
      state.projects.set(projects.map(function(p) {
        projectIndex[p.getId()] = p;
        return {
          id: p.getId(),
          name: p.get('name')
        };
      }));
    }).done();
  });

  return state;
}

