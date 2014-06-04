/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  doDelete: function() {
    this.props.project.deleteRecord();
  },
  render: function() {
    var name = this.props.project.get('name');
    return <div className="project-card" style={{"background-color": "#f77"}}>
      <span className="name">{name}</span>
      <button className="delete" onClick={this.doDelete}>X</button>
    </div>;
  }
});
