var value = require('observ');
var DropboxService = require('../dropbox/DropboxService');

module.exports = function(events) {
  var state = value('');

  events.editAddFormName(function(data) {
    state.set(data.name);
  });

  events.addProject(function() {
    DropboxService.insert('projects', { name: state() });
    state.set('');
  });

  return state;
};