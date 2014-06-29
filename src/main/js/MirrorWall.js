"use strict";

var AddProjectView = require('./AddProjectView');
var mercury = require('mercury');
var h = mercury.h;

var ProjectsView = require('./ProjectsView');

var events = require('./events');

module.exports = {
  state: function() {
    var ProjectStore = require('./stores/ProjectStore')(events);
    var AddProjectFormStore = require('./stores/AddProjectFormStore')(events);
    var EditorStore = require('./stores/EditorStore')(events, ProjectStore);
    return mercury.struct({
      projects: ProjectStore,
      addForm: AddProjectFormStore,
      editors: EditorStore
    });
  },
  render: function(state) {
    return h('div', [
      AddProjectView(state.addForm, events),
      ProjectsView(state.projects, state.editors, events)
    ])
  }
}
