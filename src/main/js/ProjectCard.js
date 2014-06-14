"use strict";

var mercury = require('mercury');
var h = mercury.h;

var ProjectCard = {};

ProjectCard.render = function(project) {
  var name = project.get('name');
  return h('div.project-card', [
    h('span.name', name),
    h('button.delete', {
      'ev-click': mercury.event(project.deleteRecord.bind(project))
    },
      h('i.fa.fa-times'))
  ]);
};

module.exports = ProjectCard;