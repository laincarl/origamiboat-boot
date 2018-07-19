'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = exports.ExamRoute = exports.ManageRoute = exports.Login = exports.NotFoundPage = exports.Home = undefined;

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = require('Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})(); /*
       * @Author: LainCarl 
       * @Date: 2018-03-05 20:34:58 
       * @Last Modified by: LainCarl
       * @Last Modified time: 2018-03-06 16:05:18
       */

var Home = exports.Home = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./Home');
  },
  loading: _Loading2.default
});
var NotFoundPage = exports.NotFoundPage = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./NotFoundPage');
  },
  loading: _Loading2.default
});
var Login = exports.Login = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./Login');
  },
  loading: _Loading2.default
});
var ManageRoute = exports.ManageRoute = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./manage/ManageRoute');
  },
  loading: _Loading2.default
});
var ExamRoute = exports.ExamRoute = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./exam/ExamRoute');
  },
  loading: _Loading2.default
});
var Account = exports.Account = (0, _reactLoadable2.default)({
  loader: function loader() {
    return import('./account/Account');
  },
  loading: _Loading2.default
});
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', 'src/container/index.js');
  reactHotLoader.register(NotFoundPage, 'NotFoundPage', 'src/container/index.js');
  reactHotLoader.register(Login, 'Login', 'src/container/index.js');
  reactHotLoader.register(ManageRoute, 'ManageRoute', 'src/container/index.js');
  reactHotLoader.register(ExamRoute, 'ExamRoute', 'src/container/index.js');
  reactHotLoader.register(Account, 'Account', 'src/container/index.js');
  leaveModule(module);
})();

;