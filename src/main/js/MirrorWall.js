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
    return mercury.struct({
      projects: ProjectStore.projects,
      addForm: AddProjectFormStore
    });
  },
  render: function(state) {
    return h('div', [
      AddProjectView(state.addForm, events),
      ProjectsView(state.projects, events)
    ])
  }
}
