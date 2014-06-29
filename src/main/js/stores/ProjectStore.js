var DropboxService = require('../dropbox/DropboxService');
var value = require('observ');
var input = require('geval/single');

module.exports = function(events) {
  var projects = value([]);
  var projectIndex = {};
  var events = { delete: input() };

  events.delete(function(project) {
    project._entity.deleteRecord();
  });

  DropboxService.subscribe('projects', function() {
    DropboxService.query('projects').then(function(ps) {
      projectIndex = {};
      projects.set(ps.map(function(p) {
        projectIndex[p.getId()] = p;
        return {
          id: p.getId(),
          name: p.get('name'),
          _entity: p
        };
      }));
    }).done();
  });

  return { state: projects, events: events };
}

