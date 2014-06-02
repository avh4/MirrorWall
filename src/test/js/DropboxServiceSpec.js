require('./env');
var DropboxService = require('../../main/js/DropboxService');

describe('DropboxClient', function() {
  describe('insert', function() {
    it('inserts the record', function() {
      expect(Dropbox['MyTable']).to.not.exist;
      DropboxService.insert('MyTable', { data: true});
      expect(Dropbox['MyTable']).to.eql([{data: true}]);
    });
  });
});