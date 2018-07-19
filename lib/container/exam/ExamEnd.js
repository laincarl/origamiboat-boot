'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-04-05 15:39:13 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-04-05 16:10:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 错误提示页面  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ExamEnd = function (_Component) {
  _inherits(ExamEnd, _Component);

  function ExamEnd() {
    _classCallCheck(this, ExamEnd);

    return _possibleConstructorReturn(this, (ExamEnd.__proto__ || Object.getPrototypeOf(ExamEnd)).apply(this, arguments));
  }

  _createClass(ExamEnd, [{
    key: 'render',
    value: function render() {
      var message = this.props.message;

      return _react2.default.createElement(
        'div',
        {
          style: {
            height: 420,
            width: 700,
            margin: '100px auto',
            background: '#228c80',
            borderRadius: 30,
            border: '20px solid #ddb06e',
            textAlign: 'center'
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              color: 'white',
              marginTop: 90,
              fontSize: 30
            }
          },
          message
        ),
        _react2.default.createElement(
          _button2.default,
          {
            onClick: function onClick() {
              _AppState2.default.history.goBack();
            },
            style: {
              marginTop: 90,
              background: '#bb8c3e',
              height: 50,
              width: 150,
              fontSize: 20,
              color: 'white',
              border: 'none'
            }
          },
          '\u8FD4\u56DE'
        )
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

  return ExamEnd;
}(_react.Component);

var _default = ExamEnd;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExamEnd, 'ExamEnd', 'src/container/exam/ExamEnd.js');
  reactHotLoader.register(_default, 'default', 'src/container/exam/ExamEnd.js');
  leaveModule(module);
})();

;