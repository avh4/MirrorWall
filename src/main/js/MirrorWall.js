/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="container">
      <div className="project-card" style={{"background-color": "#f77"}}>
        Project wall
      </div>
    </div>;
  }
});
