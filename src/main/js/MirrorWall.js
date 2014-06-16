"use strict";

var ProjectsView = require('./ProjectsView');
var AddProjectView = require('./AddProjectView');
var ProjectService = require('./ProjectService');
var mercury = require('mercury');
var h = mercury.h;

var MirrorWall = {};

MirrorWall.state = function() {
  var state = mercury.struct({
    AddProjectView: AddProjectView.state(),
    projects: mercury.value([]),
    onDeleteProject: mercury.value(mercury.input())
  });

  ProjectService.subscribe(function(projects) {
    state.projects.set(projects);
  });

  state.onDeleteProject()(function(project) {
    project.deleteRecord();
  });

  return state;
}

MirrorWall.render = function(state) {
  return h('div', [
    AddProjectView.render(state.AddProjectView),
    ProjectsView.render(state.projects, state.onDeleteProject)
  ]);
};

module.exports = MirrorWall;
