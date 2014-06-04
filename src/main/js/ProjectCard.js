/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var name = this.props.project.get('name');
    return <div className="project-card" style={{"background-color": "#f77"}}>{name}</div>;
  }
});
