"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return React.DOM.div({className: "container"}, 
      React.DOM.div({className: "project-card", style: {"background-color": "#f77"}}, "Project wall"));
  }
});
