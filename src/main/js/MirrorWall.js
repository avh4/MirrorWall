"use strict";

var AddProjectView = require('./AddProjectView');
var mercury = require('mercury');
var h = mercury.h;

var ProjectsView = require('./ProjectsView');

module.exports = {
  state: function() {
    var events = require('./events');
    var ProjectStore = require('./stores/ProjectStore')(events);
    var AddProjectFormStore = require('./stores/AddProjectFormStore')();
    var EditorStore = require('./stores/EditorStore')(events, ProjectStore);
    events.AddProjectFormStore = AddProjectFormStore.events;
    return mercury.struct({
      projects: ProjectStore,
      addForm: AddProjectFormStore.state,
      editors: EditorStore,
      events: events
    });
  },
  render: function(state) {
    return h('div', [
      AddProjectView(state.addForm, state.events.AddProjectFormStore),
      ProjectsView(state.projects, state.editors, state.events)
    ])
  }
}
