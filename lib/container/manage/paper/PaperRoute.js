'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Papers = require('./Papers');

var _Papers2 = _interopRequireDefault(_Papers);

var _CreatePaper = require('./CreatePaper');

var _CreatePaper2 = _interopRequireDefault(_CreatePaper);

var _PaperDetail = require('./PaperDetail');

var _PaperDetail2 = _interopRequireDefault(_PaperDetail);

require('../../../assets/css/paper.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-05 20:33:52 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-28 17:13:12
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PaperRoute = function (_Component) {
  _inherits(PaperRoute, _Component);

  function PaperRoute() {
    _classCallCheck(this, PaperRoute);

    return _possibleConstructorReturn(this, (PaperRoute.__proto__ || Object.getPrototypeOf(PaperRoute)).apply(this, arguments));
  }

  _createClass(PaperRoute, [{
    key: 'render',
    value: function render() {
      var match = this.props.match;
      // console.log(match)
      // console.log(this.props);

      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url + '/list', component: _Papers2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/create', component: _CreatePaper2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/detail/:id', component: _PaperDetail2.default }),
        _react2.default.createElement(_reactRouterDom.Redirect, { from: '' + match.url, to: match.url + '/list' })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PaperRoute;
}(_react.Component);

var _default = PaperRoute;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PaperRoute, 'PaperRoute', 'src/container/manage/paper/PaperRoute.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/paper/PaperRoute.js');
  leaveModule(module);
})();

;