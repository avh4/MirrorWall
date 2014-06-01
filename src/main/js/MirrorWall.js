/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectsView = require('./ProjectsView');

module.exports = React.createClass({
  render: function() {
    return <ProjectsView projects={this.props.projects}/>;
  }
});
