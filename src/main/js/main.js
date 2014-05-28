/** @jsx React.DOM */

"use strict";

var React = require('react');
var MirrorWall = require('./MirrorWall');

var client = new Dropbox.Client({key: 'hzy00wu1zd7neiv'});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
  console.log("AUTHED!");
    // Client is authenticated. Display UI.
    
    var datastoreManager = client.getDatastoreManager();
    datastoreManager.openDefaultDatastore(function (error, datastore) {
        if (error) {
            alert('Error opening default datastore: ' + error);
        }

        // Now you have a datastore. The next few examples can be included here.
        
        var projects = datastore.getTable('projects');
        projects.insert({test: new Date().toString()});
        
        var mw = <MirrorWall datastore={datastore}/>;
        React.renderComponent(mw, document.getElementById('root'));

        datastore.recordsChanged.addListener(function (event) {
            console.log('records changed:', event.affectedRecordsForTable('projects'));
            mw.doUpdate();
        });
    });
    
} else {
  console.log("NOT AUTHED");
  client.reset();
  client.authenticate();
}