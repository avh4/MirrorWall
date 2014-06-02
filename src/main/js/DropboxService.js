var DropboxClient = require('./DropboxClient');
var Q = require('q');

var datastore;

function getDatastore() {
  var defer = Q.defer();
  if (!datastore) {
    DropboxClient.authenticate();
    datastoreManager = DropboxClient.getDatastoreManager();
    datastoreManager.openDefaultDatastore(function(error, ds) {
      datastore = ds;
      defer.resolve(datastore);
    });
  } else {
    defer.resolve(datastore);
  }
  return defer.promise;
}

exports.insert = function(table, record) {
  return getDatastore().then(function(datastore) {
    datastore.getTable(table).insert(record);
  });
};

exports.query = function(tableName) {
  return getDatastore().then(function(datastore) {
    return datastore.getTable(tableName).query();
  });
};