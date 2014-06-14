var vm = require('vm');

module.exports = function(moduleName, fakes) {
  var filename = require.resolve(moduleName);
  var fs = require('fs');

  filedata = fs.readFileSync(filename,'utf8');
  var module = { exports: {} };
  var nodeRequire = require;
  (function(module, exports) {
    var context = {
      console: console,
      require: function(moduleName) {
        var basename = moduleName.substring(moduleName.lastIndexOf('/') + 1);
        if (fakes && fakes[basename]) {
          return fakes[basename];
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
    vm.runInNewContext(filedata, context, filename);
  })(module, module.exports);
  return module.exports;
}
