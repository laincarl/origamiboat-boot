'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Exams = require('./Exams');

var _Exams2 = _interopRequireDefault(_Exams);

var _ExamDetail = require('./ExamDetail');

var _ExamDetail2 = _interopRequireDefault(_ExamDetail);

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-06-04 20:36:04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ExamRoute = function (_Component) {
  _inherits(ExamRoute, _Component);

  function ExamRoute() {
    _classCallCheck(this, ExamRoute);

    return _possibleConstructorReturn(this, (ExamRoute.__proto__ || Object.getPrototypeOf(ExamRoute)).apply(this, arguments));
  }

  _createClass(ExamRoute, [{
    key: 'render',
    value: function render() {
      var match = this.props.match;
      // console.log(this.props);

      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url + '/list', component: _Exams2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url + '/detail/:id', component: _ExamDetail2.default }),
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

  return ExamRoute;
}(_react.Component);

var _default = ExamRoute;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExamRoute, 'ExamRoute', 'src/container/manage/exam/ExamRoute.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/exam/ExamRoute.js');
  leaveModule(module);
})();

;