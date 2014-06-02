var DropboxService = require('./DropboxService');

exports.add = function(name) {
  DropboxService.insert('projects', { name: name });
}