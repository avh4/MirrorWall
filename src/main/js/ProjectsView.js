// "use strict";
//
// var mercury = require('mercury');
// var h = mercury.h;
// var ProjectCard = require('./ProjectCard');
// var ProjectEditor = require('./ProjectEditor');
//
// var ProjectsView = {};
//
// ProjectsView.render = function(projects, deleteRecord, onEdit, editors) {
//   if (!projects) {
//     return h('div', 'No project data provided');
//   } else {
//     var cards = projects.map(function(project, i) {
//       if (editors[project.getId()]) {
//         var cell = ProjectEditor.render(project);
//       } else {
//         var cell = ProjectCard.render(project, deleteRecord, onEdit);
//       }
//       return h('div.col-xs-4.col-sm-3.col-lg-2', cell);
//     });
//     return h('div.row', cards);
//   }
// };
//
// module.exports = ProjectsView;

var mercury = require('mercury');
var h = mercury.h;
var ProjectCard = require('./ProjectCard');

module.exports = function(projects, events) { //projects, deleteRecord, onEdit, editors) {
  if (!projects) {
    return h('div', 'No project data provided');
  } else {
    var cards = projects.map(function(project, i) {
      // if (editors[project.getId()]) {
      //   var cell = ProjectEditor.render(project);
      // } else {
        var cell = ProjectCard(project, events);
      // }
      return h('div.col-xs-4.col-sm-3.col-lg-2', cell);
    });
    return h('div.row', cards);
  }
};