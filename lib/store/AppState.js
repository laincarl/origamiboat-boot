'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5; /*
                                                                                                 * @Author: LainCarl 
                                                                                                 * @Date: 2018-03-05 20:34:01 
                                                                                                 * @Last Modified by: LainCarl
                                                                                                 * @Last Modified time: 2018-03-14 17:07:35
                                                                                                 */


var _mobx = require('mobx');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AppState = (_class = function () {
  function AppState() {
    var _this = this;

    _classCallCheck(this, AppState);

    _initDefineProp(this, 'userAuth', _descriptor, this);

    _initDefineProp(this, 'userName', _descriptor2, this);

    _initDefineProp(this, 'history', _descriptor3, this);

    _initDefineProp(this, 'userInfo', _descriptor4, this);

    _initDefineProp(this, 'currentLocation', _descriptor5, this);

    _Axios2.default.get('/user/info').then(function (userInfo) {
      if (userInfo) {
        // console.log('origin', userInfo);
        _this.setUserInfo(userInfo);
        _this.setUserAuth(true);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  _createClass(AppState, [{
    key: 'setUserInfo',
    value: function setUserInfo(userInfo) {
      this.userInfo = _extends({}, this.userInfo, userInfo);
    }
  }, {
    key: 'setUserName',
    value: function setUserName(name) {
      this.userName = name;
    }
  }, {
    key: 'setUserAuth',
    value: function setUserAuth(flag) {
      this.userAuth = flag;
    }
  }, {
    key: 'setHistory',
    value: function setHistory(history) {
      this.history = history;
    }
  }, {
    key: 'setCurrentLocation',
    value: function setCurrentLocation(currentLocation) {
      this.currentLocation = currentLocation;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'userAuth', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'userName', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'history', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'userInfo', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'currentLocation', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setUserInfo', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setUserInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setUserName', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setUserName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setUserAuth', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setUserAuth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setHistory', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setHistory'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setCurrentLocation', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCurrentLocation'), _class.prototype)), _class);

var appState = new AppState();
var _default = appState;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppState, 'AppState', 'src/store/AppState.js');
  reactHotLoader.register(appState, 'appState', 'src/store/AppState.js');
  reactHotLoader.register(_default, 'default', 'src/store/AppState.js');
  leaveModule(module);
})();

;