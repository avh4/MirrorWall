"use strict";

var mercury = require('mercury');
var h = mercury.h;
var ProjectCard = require('./ProjectCard');

var ProjectsView = {};

ProjectsView.render = function(projects, deleteRecord) {
  if (!projects) {
    return h('div', 'No project data provided');
  } else {
    var cards = projects.map(function(project, i) {
      return h('div.col-xs-4.col-sm-3.col-lg-2',
      ProjectCard.render(project, deleteRecord));
    });
    return h('div.row', cards);
  }
};

module.exports = ProjectsView;