'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/dropdown/style');

require('antd/lib/icon/style');

require('antd/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-11 15:33:55 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-16 20:07:49
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Action = function (_Component) {
  _inherits(Action, _Component);

  function Action() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Action);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Action.__proto__ || Object.getPrototypeOf(Action)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (key) {
      for (var a = 0; a < _this.props.data.length; a += 1) {
        if (a === key.item.props.index) {
          _this.props.data[a].action();
        }
      }
    }, _this.renderMenu = function () {
      var child = _this.props.data.map(function (item) {
        return _react2.default.createElement(
          _menu2.default.Item,
          {
            key: Math.random()
          },
          _react2.default.createElement(
            'div',
            {
              className: 'text-dot',
              style: {
                width: 80,
                height: 25,
                display: 'flex',
                alignItems: 'center'
              }
            },
            item.text
          )
        );
      });

      return child;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var menu = _react2.default.createElement(
        _menu2.default,
        { onClick: this.onClick.bind(this) },
        this.renderMenu()
      );
      return _react2.default.createElement(
        _dropdown2.default,
        { overlay: menu, trigger: ['click'] },
        _react2.default.createElement(_icon2.default, {
          type: 'ellipsis',
          style: {
            cursor: 'pointer', fontWeight: 'bold', fontSize: '18px', transform: 'rotateZ(90deg)'
          }
        })
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

  return Action;
}(_react.Component);

var _default = Action;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Action, 'Action', 'src/component/common/Action.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/Action.js');
  leaveModule(module);
})();

;