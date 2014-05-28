/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  doUpdate: function() {
    this.forceUpdate();
  },
  render: function() {
    var projects = this.props.datastore.getTable('projects');
    var p = projects.query();
    return <div><h1>MirrorWall {p.length}</h1></div>;
  }
});
