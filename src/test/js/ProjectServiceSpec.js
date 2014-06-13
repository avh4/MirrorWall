require('./env');

var projectsDefer = Q.defer();
var subscriber;
var DropboxService = {
  insert: sinon.spy(),
  query: sinon.stub().withArgs('projects').returns(projectsDefer.promise),
  subscribe: function(tableName, callback) { subscriber = callback }
};

var ProjectService = subject('../../main/js/ProjectService', {
  DropboxService: DropboxService
});

describe('ProjectService', function() {
  describe('add', function() {
    it('inserts the new record', function() {
      ProjectService.add('Bake a cake');
      expect(DropboxService.insert).to.have.been.calledWith(
        'projects', { name: 'Bake a cake' }
      );
    });
  });

  describe('subscribe', function() {
    it('returns all projects when there is data', function(done) {
      projectsDefer.resolve(['A', 'B']);
      ProjectService.subscribe(function(projects) {
        expect(projects).to.eql(['A', 'B']);
        done();
      });
      subscriber();
    });
  });
});