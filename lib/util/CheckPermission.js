'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})(); /*
       * @Author: LainCarl 
       * @Date: 2018-05-19 11:15:38 
       * @Last Modified by: LainCarl
       * @Last Modified time: 2018-05-19 11:26:41
       * @Feature: 检查权限，返回true和false 
       */


var CheckPermission = function CheckPermission() {
  var role = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['student'];

  // console.log(role);
  var userAuth = _AppState2.default.userAuth,
      userInfo = _AppState2.default.userInfo;

  return userAuth && role.includes(userInfo.role);
};

var _default = CheckPermission;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CheckPermission, 'CheckPermission', 'src/util/CheckPermission.js');
  reactHotLoader.register(_default, 'default', 'src/util/CheckPermission.js');
  leaveModule(module);
})();

;