var DropboxService = require('./DropboxService');

exports.add = function(name) {
  DropboxService.insert('projects', { name: name });
}

exports.subscribe = function(callback) {
  DropboxService.subscribe('projects', function() {
    DropboxService.query('projects').then(callback).done();
  });
}