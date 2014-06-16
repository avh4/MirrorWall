"use strict";

var mercury = require('mercury');
var h = mercury.h;

var ProjectCard = {};

ProjectCard.render = function(project, deleteProject) {
  var name = project.get('name');
  return h('div.project-card', [
    h('span.name', name),
    h('button.delete', {
      'ev-click': mercury.event(deleteProject, project)
    },
      h('i.fa.fa-times'))
  ]);
};

module.exports = ProjectCard;