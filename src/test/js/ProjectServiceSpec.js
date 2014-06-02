require('./env');
var ProjectService = rewire('../../main/js/ProjectService');

var DropboxService = { insert: sinon.spy() };
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
});