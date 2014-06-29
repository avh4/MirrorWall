var value = require('observ');
var input = require('geval/single');
var DropboxService = require('../dropbox/DropboxService');

module.exports = function() {
  var events = {
    edit: input(),
    commit: input(),
  };
  var state = value('');

  events.edit(function(data) {
    state.set(data.name);
  });

  events.commit(function() {
    DropboxService.insert('projects', { name: state() });
    state.set('');
  });

  return { state: state, events: events };
};