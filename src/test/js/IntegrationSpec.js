require('./env');

var MirrorWall = subject('../../main/js/MirrorWall', {});

describe('Integration test', function() {
  it('can add and delete projects', function(done) {
    Dropbox['projects'] = [];
    var $ = new MercuryTest(MirrorWall);
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

  it('can edit projects', function(done) {
    Dropbox['projects'] = [{name: 'Eocn 101', id: '_82930'}];
    var $ = new MercuryTest(MirrorWall);
    setTimeout(function() {setTimeout(function() {
      $('.project-card').click();
      setTimeout(function() {
        $('.name-input').input('Econ 101');
        $('.done').click();
        Dropbox.triggerRecordsChanged();
        setTimeout(function() {setTimeout(function() {
          expect($('.name').text()).to.equal('Econ 101');
          done();
        });});
      });
    });});
  });
});