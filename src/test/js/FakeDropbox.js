function Table(dropbox, name) {
  this.dropbox = dropbox;
  this.name = name;
}

Table.prototype.insert = function(record) {
  if (!this.dropbox[this.name]) this.dropbox[this.name] = [];
  this.dropbox[this.name].push(record);
}

Table.prototype.toString = function() {
  return 'FakeDropbox.Table';
}

///

function Datastore(dropbox) {
  this.dropbox = dropbox;
}

Datastore.prototype.getTable = function(tableName) {
  return new Table(this.dropbox, tableName);
}

Datastore.prototype.toString = function() {
  return 'FakeDropbox.Datastore';
}

///

function DatastoreManager(dropbox) {
  if (!dropbox.authenticated) {
    throw new Error('DatastoreManager requires an authenticated Dropbox.Client!');
  }
  this.dropbox = dropbox;
}

DatastoreManager.prototype.toString = function() {
  return 'FakeDropbox.DatastoreManager';
}

DatastoreManager.prototype.openDefaultDatastore = function(callback) {
  callback(null, new Datastore(this.dropbox));
}

///

function Client(dropbox, options) {
  if (!dropbox.validAppKeys[options.key]) {
    throw new Error('FakeDropbox: app key not allowed: ' + options.key);
  }
  this.dropbox = dropbox;
}

Client.prototype.toString = function() {
  return 'FakeDropbox.Client';
}

Client.prototype.getDatastoreManager = function() {
  return new DatastoreManager(this.dropbox);
}

Client.prototype.isAuthenticated = function() {
  return !!this.dropbox.authenticated;
}

Client.prototype.authenticate = function() {
  this.dropbox.authenticated = true;
}

///

function FakeDropbox() {
  this.validAppKeys = {};
  this.authenticated = false;
  var thisDropbox = this;

  function _Client(options) {
    Client.apply(this, [thisDropbox, options]);
  }
  _Client.prototype = Object.create(Client.prototype);
  this.Client = _Client;
}

FakeDropbox.prototype.allowAppKey = function(key) {
  this.validAppKeys[key] = true;
}

FakeDropbox.prototype.toString = function() {
  return 'FakeDropbox';
}

module.exports = FakeDropbox;
