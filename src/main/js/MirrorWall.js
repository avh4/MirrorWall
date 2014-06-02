/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectsView = require('./ProjectsView');
var AddProjectView = require('./AddProjectView');
var ProjectService = require('./ProjectService');

module.exports = React.createClass({
  getInitialState: function() {
    return {projects: undefined};
  },
  componentWillMount: function() {
    ProjectService.getAll().then(function(projects) {
      this.setState({projects: projects});
    }.bind(this));
  },
  render: function() {
    return <div>
      <AddProjectView/>
      <ProjectsView projects={this.state.projects}/>
    </div>;
  }
});
