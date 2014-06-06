"use strict";

var mercury = require('mercury');
var h = mercury.h;
var ProjectCard = require('./ProjectCard');

function ProjectsView() {
  throw "not used";
}

ProjectsView.render = function(projects, onDelete) {
  if (!projects) {
    return h('div', 'No project data provided');
  } else {
    var cards = projects.map(function(project, i) {
      return h('div.col-xs-4.col-sm-3.col-lg-2',
      ProjectCard.render(project, onDelete));
    });
    return h('div.row', cards);
  }
};

module.exports = ProjectsView;