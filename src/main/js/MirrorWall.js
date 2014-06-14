"use strict";

var ProjectsView = require('./ProjectsView');
var AddProjectView = require('./AddProjectView');
var ProjectService = require('./ProjectService');
var mercury = require('mercury');
var h = mercury.h;

function MirrorWall() {
  var state = mercury.struct({
    AddProjectView: AddProjectView().state,
    projects: mercury.value([])
  });

  ProjectService.subscribe(function(projects) {
    state.projects.set(projects);
  });

  return { state: state };
}

MirrorWall.render = function(state) {
  return h('div', [
    AddProjectView.render(state.AddProjectView),
    ProjectsView.render(state.projects)
  ]);
};

module.exports = MirrorWall;
