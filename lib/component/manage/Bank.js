'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Action = require('Action');

var _Action2 = _interopRequireDefault(_Action);

var _reactRouter = require('react-router');

var _questionbank = require('../../assets/image/questionbank.png');

var _questionbank2 = _interopRequireDefault(_questionbank);

require('./Bank.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-11 15:34:09 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-28 12:56:51
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Bank = function (_Component) {
  _inherits(Bank, _Component);

  function Bank() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bank);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bank.__proto__ || Object.getPrototypeOf(Bank)).call.apply(_ref, [this].concat(args))), _this), _this.test = function () {
      console.log('test');
    }, _this.openDetail = function () {
      var history = _this.props.history;

      history.push('/manage/bank/detail/' + _this.props.data.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bank, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var title = data.title;

      return _react2.default.createElement(
        'div',
        {
          role: 'none',
          onClick: this.openDetail,
          className: 'hover-deeper',
          style: {
            boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
            width: 160,
            height: 190,
            margin: 20,
            position: 'relative',
            cursor: 'pointer'
          }
        },
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', margin: '30px 0 20px 0' } },
          _react2.default.createElement('img', { src: _questionbank2.default, alt: '', style: { width: 90 } })
        ),
        _react2.default.createElement(
          'div',
          {
            role: 'none',
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            style: { position: 'absolute', top: 5, right: 10 }
          },
          _react2.default.createElement(_Action2.default, { data: [{
              action: this.test,
              text: 'test'
            }]
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'text-dot',
            style: { padding: '15px 10px', fontWeight: 'bold', marginTop: 16 }
          },
          title
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

  return Bank;
}(_react.Component);

var _default = (0, _reactRouter.withRouter)(Bank);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bank, 'Bank', 'src/component/manage/Bank.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/Bank.js');
  leaveModule(module);
})();

;