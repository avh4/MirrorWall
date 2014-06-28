"use strict";

var mercury = require('mercury');
var MirrorWall = require('./MirrorWall');

var h = mercury.h

var state = MirrorWall.state();

mercury.app(document.getElementById('root'), state, MirrorWall.render)
