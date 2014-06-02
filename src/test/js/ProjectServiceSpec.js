require('./env');
var ProjectService = rewire('../../main/js/ProjectService');

var projectsDefer = Q.defer();
var DropboxService = {
  insert: sinon.spy(),
  query: sinon.stub().withArgs('projects').returns(projectsDefer.promise)
};
ProjectService.__set__('DropboxService', DropboxService);

describe('ProjectService', function() {
  describe('add', function() {
    it('inserts the new record', function() {
      ProjectService.add('Bake a cake');
      expect(DropboxService.insert).to.have.been.calledWith(
        'projects', { name: 'Bake a cake' }
      );
    });
  });

  describe('getAll', function() {
    it('returns all projects', function(done) {
      projectsDefer.resolve(['A', 'B']);
      check(ProjectService.getAll(), done, ['A', 'B']);
    });
  });
});