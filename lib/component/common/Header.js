'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _header = require('css/header.less');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-11 15:34:01 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-11 16:50:48
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasBack = _props.hasBack,
          buttons = _props.buttons,
          refresh = _props.refresh,
          title = _props.title,
          disabled = _props.disabled,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        {
          style: {
            background: 'white',
            height: 50,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }
        },
        hasBack && _react2.default.createElement(_icon2.default, { type: 'arrow-left', style: { fontSize: 18, marginLeft: 10, cursor: 'pointer' }, onClick: function onClick() {
            history.goBack();
          } }),
        _react2.default.createElement(
          'div',
          { style: { fontSize: 18, marginLeft: 10 } },
          title
        ),
        _react2.default.createElement('div', { style: { marginLeft: 100 } }),
        buttons && buttons.map(function (button) {
          return _react2.default.createElement(
            _button2.default,
            {
              className: _header2.default.headerBtn,
              disabled: disabled,
              style: {
                marginLeft: 15,
                alignItems: 'center',
                // color: disabled || button.disabled ? 'rgba(0, 0, 0, 0.26)' : '#3F51B5',
                // pointerEvents: disabled || button.disabled ? 'none' : 'auto',
                display: 'flex',
                height: '28px',
                fontSize: '14px',
                lineHeight: '24px'
              },
              onClick: button.onClick
            },
            _react2.default.createElement(
              'div',
              null,
              button.prefix,
              ' ',
              button.text
            )
          );
        }),
        refresh && _react2.default.createElement(
          _button2.default,
          {
            disabled: disabled,
            className: _header2.default.headerBtn,
            style: {
              marginLeft: 15,
              alignItems: 'center',
              // color: disabled ? 'rgba(0, 0, 0, 0.26)' : '#3F51B5',
              // pointerEvents: disabled ? 'none' : 'auto',
              display: 'flex',
              height: '28px',
              fontSize: '14px',
              lineHeight: '24px'
            },
            onClick: function onClick() {
              refresh();
            }
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_icon2.default, { type: 'reload' }),
            ' ',
            '\u5237\u65B0'
          )
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

  return Header;
}(_react.Component);

var _default = (0, _reactRouter.withRouter)(Header);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', 'src/component/common/Header.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/Header.js');
  leaveModule(module);
})();

;