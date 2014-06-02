var DropboxClient = require('./DropboxClient');

var datastore;

exports.insert = function(table, record) {
  if (!datastore) {
    DropboxClient.authenticate();
    datastoreManager = DropboxClient.getDatastoreManager();
    datastoreManager.openDefaultDatastore(function(error, ds) {
      datastore = ds;
      datastore.getTable(table).insert(record);
    });
  } else {
    datastore.getTable(table).insert(record);
  }
};