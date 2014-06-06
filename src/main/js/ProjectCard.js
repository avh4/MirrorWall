"use strict";

var mercury = require('mercury');
var h = mercury.h;

function ProjectCard(project) {
  throw "not used";
}

ProjectCard.render = function(project, onDelete) {
  var name = project.get('name');
  return h('div.project-card', [
    h('span.name', name),
    h('button.delete', {
      'ev-click': mercury.event(onDelete, project)
    },
      h('i.fa.fa-times'))
  ]);
};

module.exports = ProjectCard;