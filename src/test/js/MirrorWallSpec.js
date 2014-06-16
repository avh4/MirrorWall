require('./env');

var projects;
var ProjectService = {
  subscribe: function(callback) { callback(projects) }
};

var AddProjectView = {
  state: function() { return {} },
  render: function() { return h('div#AddProjectView1') }
};

var MirrorWall = subject('../../main/js/MirrorWall', {
  ProjectsView: { render: function(state) { return h('div#ProjectsView1', state)}},
  AddProjectView: AddProjectView,
  ProjectService: ProjectService
});

describe('MirrorWall', function() {
  it('shows projects', function(done) {
    projects = ['Project wall'];
    var $ = new MercuryTest(MirrorWall);
    setTimeout(function() {
      expect($('#ProjectsView1').text()).to.eql('Project wall');
      done();
    });
  });

  it('shows the add project widget', function() {
    var $ = new MercuryTest(MirrorWall);
    expect($('#AddProjectView1').length).to.eql(1);
  });
});