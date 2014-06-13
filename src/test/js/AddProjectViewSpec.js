require('./env');

var ProjectService = {
  add: sinon.spy()
};

function subject(moduleName, fakes) {
  var filename = require.resolve(moduleName);
  var fs = require('fs');

  filedata = fs.readFileSync(filename,'utf8');
  var module = { exports: {}};
  var nodeRequire = require;
  (function(module, exports) {
    var context = {
      console: console,
      require: function(moduleName) {
        if (moduleName.indexOf('ProjectService') != -1) {
          return ProjectService
        }
        var actualName = moduleName;
        if (moduleName.indexOf('./') == 0 || moduleName.indexOf('../') == 0) {
          actualName = '../../main/js/' + moduleName;
        }
        return nodeRequire(actualName);
      },
      module: module,
      exports: module.exports
    };
    var vm = require('vm');
    vm.runInNewContext(filedata, context, filename);
  })(module, module.exports);
  return module.exports;
}

var MercuryTest = require('./MercuryTest');
var AddProjectView = subject('../../main/js/AddProjectView', {ProjectService: ProjectService});

describe('AddProjectView', function() {
  describe('tapping the add button', function() {
    var $;
    
    beforeEach(function(done) {
      $ = new MercuryTest(AddProjectView);
      
      $('.add-field').input('Amazing Race');
      $('.add-button').click();
      setTimeout(done);
    });
    
    it('adds the project', function() {
      expect(ProjectService.add).to.have.been.calledWith('Amazing Race');
    });
    
    it('clears the name input', function() {
      expect($('input').val()).to.equal('');
    });
  });
});
