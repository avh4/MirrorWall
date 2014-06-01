/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectService = require('./ProjectService');

module.exports = React.createClass({
  getInitialState: function() {
    return { name: '' };
  },
  doNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  doAdd: function() {
    ProjectService.add(this.state.name);
    this.setState({name: ''});
  },
  render: function() {
    return <div className="row"><input value={this.state.name} onChange={this.doNameChange}/><button onClick={this.doAdd}>Add</button></div>;
  }
});
