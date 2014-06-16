"use strict";

var mercury = require('mercury');
var MirrorWall = require('./MirrorWall');

var h = mercury.h

var state = mercury.struct({
  MirrorWall: MirrorWall.state()
});

mercury.app(document.getElementById('root'), state.MirrorWall, MirrorWall.render)
