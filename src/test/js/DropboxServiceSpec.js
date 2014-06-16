require('./env');
var DropboxService = require('../../main/js/DropboxService');

describe('DropboxService', function() {
  describe('insert', function() {
    it('inserts the record', function() {
      expect(Dropbox['MyTable']).to.not.exist;
      DropboxService.insert('MyTable', { data: true}).then(function() {
        expect(Dropbox['MyTable']).to.eql([{data: true}]);
      });
    });

    it('only opens the datastore once', function() {
      return DropboxService.insert('MyTable', { data: true})
      .then(function() {
        DropboxService.insert('MyTable', { data: true});
      });
    });
  });

  describe('query', function() {
    it('retrieves records', function(done) {
      Dropbox['MyTable'] = [ {name: 'A'}, {name: 'B'} ];
      DropboxService.query('MyTable').then(function(records) {
        expect(records.map(function(r) { return r.get('name') })).to.eql(['A', 'B']);
        done();
      });
    });
  });

  describe('subscribe', function() {
    it('calls the subscriber when records change', function() {
      var callback = sinon.spy();
      DropboxService.subscribe('MyTable', callback);
      Dropbox.triggerRecordsChanged();
      expect(callback).to.have.been.calledTwice;
    });

    it('calls the subscriber immediately', function() {
      var callback = sinon.spy();
      DropboxService.subscribe('MyTable', callback);
      expect(callback).to.have.been.called;
    });
  });
});