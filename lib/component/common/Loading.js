'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})(); /*
       * @Author: LainCarl 
       * @Date: 2018-03-05 20:34:24 
       * @Last Modified by:   LainCarl 
       * @Last Modified time: 2018-03-05 20:34:24 
       */

function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return _react2.default.createElement(
        'div',
        null,
        'Loader timed out!'
      );
    } else if (props.pastDelay) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    } else {
      return null;
    }
  } else if (props.error) {
    return _react2.default.createElement(
      'div',
      null,
      'Error! Component failed to load'
    );
  } else {
    return null;
  }
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, 'Loading', 'src/component/common/Loading.js');
  leaveModule(module);
})();

;