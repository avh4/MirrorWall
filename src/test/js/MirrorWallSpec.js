// require('./env');
//
// var projects;
// var ProjectService = {
//   subscribe: function(callback) { callback(projects) }
// };
//
// describe('MirrorWall', function() {
//   var MirrorWall;
//   var AddProjectView;
//   var ProjectsView;
//
//   beforeEach(function() {
//     AddProjectView = MercuryTest.stub('AddProjectView');
//     ProjectsView = MercuryTest.stub('ProjectsView');
//
//     MirrorWall = subject('../../main/js/MirrorWall', {
//       ProjectsView: ProjectsView,
//       AddProjectView: AddProjectView,
//       ProjectService: ProjectService
//     });
//   });
//
//   it('shows projects', function(done) {
//     projects = ['Project wall'];
//     var $ = new MercuryTest(MirrorWall);
//     setTimeout(function() {
//       expect($('#ProjectsView1').text()).to.eql('Project wall');
//       done();
//     });
//   });
//
//   it('shows the add project widget', function() {
//     var $ = new MercuryTest(MirrorWall);
//     expect(AddProjectView).to.have.been.calledWith(3);
//     expect($('#AddProjectView1').length).to.eql(1);
//   });
// });