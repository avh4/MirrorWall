var DropboxClient = require('./DropboxClient');

exports.insert = function(table, record) {
  DropboxClient.authenticate();
  var datastoreManager = DropboxClient.getDatastoreManager();
  datastoreManager.openDefaultDatastore(function(error, datastore) {
    datastore.getTable(table).insert(record);
  });
};