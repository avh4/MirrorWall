require('./env');

var MirrorWall = subject('../../main/js/MirrorWall', {});

describe('Integration test', function() {
  it('can add and delete projects', function(done) {
    Dropbox['projects'] = [];
    projects = ['Project wall'];
    var $ = new MercuryTest(MirrorWall);
    setTimeout(function() {
      $('.add-field').input('Amazing Race');
      $('.add-button').click();
      Dropbox.triggerRecordsChanged();
      setTimeout(function() {setTimeout(function() {
        expect($('.name').text()).to.equal('Amazing Race');
        $('.delete').click();
        Dropbox.triggerRecordsChanged();
        setTimeout(function() {setTimeout(function() {
          expect($('.project-card').length).to.equal(0);
          done();
        });});
      });});
    });
  });
});