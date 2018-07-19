'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Permission = require('Permission');

var _Permission2 = _interopRequireDefault(_Permission);

var _reactRouterDom = require('react-router-dom');

var _ExamPage = require('./ExamPage');

var _ExamPage2 = _interopRequireDefault(_ExamPage);

var _Result = require('./Result');

var _Result2 = _interopRequireDefault(_Result);

var _Exams = require('./Exams');

var _Exams2 = _interopRequireDefault(_Exams);

var _Finish = require('./Finish');

var _Finish2 = _interopRequireDefault(_Finish);

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-23 16:27:52
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import ExamEnd from './ExamEnd';


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
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url + '/main/:id', component: _ExamPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/exams', component: _Exams2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/finish/:id', component: _Finish2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/result/:id', component: _Result2.default }),
        _react2.default.createElement(_reactRouterDom.Redirect, { from: '' + match.url, to: match.url + '/main' })
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

var _default = (0, _Permission2.default)(ExamRoute, ['admin', 'student']);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExamRoute, 'ExamRoute', 'src/container/exam/ExamRoute.js');
  reactHotLoader.register(_default, 'default', 'src/container/exam/ExamRoute.js');
  leaveModule(module);
})();

;