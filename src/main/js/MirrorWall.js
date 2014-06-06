"use strict";

var ProjectsView = require('./ProjectsView');
var AddProjectView = require('./AddProjectView');
var ProjectService = require('./ProjectService');
var mercury = require('mercury');
var h = mercury.h;

function MirrorWall() {
  var state = mercury.struct({
    AddProjectView: AddProjectView().state,
    projects: mercury.value([]),
    events: mercury.input(['onDelete'])
  });

  ProjectService.subscribe(function(projects) {
    state.projects.set(projects);
  });

  state.events.onDelete(function(project) {
    project.deleteRecord();
  });
  return { state: state };
}

MirrorWall.render = function(state) {
  return h('div', [
    AddProjectView.render(state.AddProjectView),
    ProjectsView.render(state.projects, state.events.onDelete)
  ]);
};

module.exports = MirrorWall;
