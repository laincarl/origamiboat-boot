'use strict';

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

require('antd/lib/locale-provider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _zh_CN = require('antd/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('moment/locale/zh-cn');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})(); /*
       * @Author: LainCarl 
       * @Date: 2018-03-05 20:35:21 
       * @Last Modified by: LainCarl
       * @Last Modified time: 2018-04-05 17:25:35
       */

var render = function render(Cmt) {
  _reactDom2.default.render(_react2.default.createElement(
    _localeProvider2.default,
    { locale: _zh_CN2.default },
    _react2.default.createElement(Cmt, null)
  ), document.getElementById('root'));
};
render(_App2.default);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, 'render', 'src/index.js');
  leaveModule(module);
})();

;