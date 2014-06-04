/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectCard = require('./ProjectCard');

module.exports = React.createClass({
  render: function() {
    if (!this.props.projects) {
      return <div>No project data provided</div>;
    }
    var cards = this.props.projects.map(function(project, i) {
      return <div className="col-xs-4 col-sm-3 col-lg-2" key={i}>
        <ProjectCard project={project}/>
      </div>;
    }, this);
    return <div className="row">{cards}</div>;
  }
});
