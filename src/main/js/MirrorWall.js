"use strict";

var AddProjectView = require('./AddProjectView');
var mercury = require('mercury');
var h = mercury.h;

var ProjectsView = require('./ProjectsView');

module.exports = {
  state: function() {
    var ProjectStore = require('./stores/ProjectStore')();
    var AddProjectFormStore = require('./stores/AddProjectFormStore')();
    var EditorStore = require('./stores/EditorStore')(ProjectStore);
    return mercury.struct({
      projects: ProjectStore.state,
      addForm: AddProjectFormStore.state,
      editors: EditorStore.state,
      events: {
        AddProjectFormStore: AddProjectFormStore.events,
        ProjectStore: ProjectStore.events,
        EditorStore: EditorStore.events
      }
    });
  },
  render: function(state) {
    return h('div', [
      AddProjectView(state.addForm, state.events.AddProjectFormStore),
      ProjectsView(state.projects, state.editors, state.events)
    ])
  }
}
