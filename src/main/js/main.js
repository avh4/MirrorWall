/** @jsx React.DOM */

"use strict";

var React = require('react');
var MirrorWall = require('./MirrorWall');

var projects = ['Project wall', 'Econ 101'];

React.renderComponent(<MirrorWall projects={projects}/>, document.getElementById('root'));
