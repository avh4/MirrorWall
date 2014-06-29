var input = require('geval/single');

module.exports = {
  editProject: input(), // project
  editProjectName: input(), // project id, name
  editProjectColor: input(), // project id, color
  commitProject: input(), // project id
};
