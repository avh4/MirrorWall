/** @jsx React.DOM */

"use strict";

var React = require('react');
var ProjectService = require('./ProjectService');

module.exports = React.createClass({
  doAdd: function() {
    ProjectService.add();
  },
  render: function() {
    return <div className="row"><button onClick={this.doAdd}>Add</button></div>;
  }
});
