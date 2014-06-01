/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectsView = require('./ProjectsView');
var AddProjectView = require('./AddProjectView');

module.exports = React.createClass({
  render: function() {
    return <div>
      <AddProjectView/>
      <ProjectsView projects={this.props.projects}/>
    </div>;
  }
});
