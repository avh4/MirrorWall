/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectService = require('./ProjectService');

module.exports = React.createClass({
  doAdd: function() {
    ProjectService.add(this.refs.name.getDOMNode().value);
  },
  render: function() {
    return <div className="row"><input ref="name"/><button onClick={this.doAdd}>Add</button></div>;
  }
});
