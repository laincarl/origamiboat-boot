'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: LainCarl 
                   * @Date: 2018-03-06 11:10:23 
                   * @Last Modified by: LainCarl
                   * @Last Modified time: 2018-03-23 15:18:38
                   */

// import axios from 'Axios';


require('antd/lib/popover/style');

require('antd/lib/icon/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mobxReact = require('mobx-react');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _MainHeader = require('./MainHeader.less');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    // boxShadow: '0 2px 8px #f0f1f2',
    position: 'fixed',
    top: 0,
    zIndex: 10,
    width: '100%',
    color: 'black',
    background: 'white',
    // background: '#f8f8f8',
    borderBottom: '1px solid #ddd'
  },
  headIcon: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    marginRight: 20
  },
  headIconBig: {
    width: 60,
    height: 60,
    borderRadius: '50%'
  }
};
var roles = {
  student: '学生',
  teacher: '教师',
  admin: '管理员'
};
var MainHeader = (_dec = (0, _mobxReact.inject)('AppState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(MainHeader, _Component);

  function MainHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).call.apply(_ref, [this].concat(args))), _this), _this.to = function (url) {
      var history = _this.props.history;

      history.push(url);
    }, _this.signOut = function () {
      _jsCookie2.default.remove('token');
      // 退出登录，刷新页面
      window.location.reload();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var AppState = this.props.AppState;
      var _AppState$userInfo = AppState.userInfo,
          real_name = _AppState$userInfo.real_name,
          url = _AppState$userInfo.url,
          role = _AppState$userInfo.role;
      // console.log('get', real_name, url);

      var account = _react2.default.createElement(
        'div',
        { style: { width: 190 } },
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center' } },
          _react2.default.createElement('img', {
            style: styles.headIconBig,
            src: url,
            alt: ''
          }),
          _react2.default.createElement(
            'div',
            { style: { marginTop: 10 } },
            real_name
          ),
          _react2.default.createElement(
            'div',
            { style: { fontSize: 10, marginTop: 3 } },
            roles[role]
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', justifyContent: 'space-around', marginTop: 20 } },
          _react2.default.createElement(
            _button2.default,
            { style: { fontSize: 12 }, onClick: function onClick() {
                _this2.to('/account');
              } },
            '\u4E2A\u4EBA\u4E2D\u5FC3'
          ),
          _react2.default.createElement(
            _button2.default,
            { style: { fontSize: 12 }, type: 'primary', onClick: this.signOut },
            '\u9000\u51FA\u767B\u5F55'
          )
        )
      );
      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          {
            role: 'none',
            className: _MainHeader2.default.header_btn,
            style: {
              // userSelect: 'none',
              cursor: 'pointer',
              height: '100%',
              width: 80,
              marginLeft: 20,
              textAlign: 'center',
              lineHeight: '50px'
            },
            onClick: function onClick() {
              _this2.to('/');
            }
          },
          _react2.default.createElement(_icon2.default, { type: 'home' }),
          '  \u4E3B\u9875'
        ),
        _react2.default.createElement('div', { className: 'flex-space' }),
        AppState.userAuth && ['admin', 'teacher'].includes(AppState.userInfo.role) && _react2.default.createElement(
          'div',
          {
            role: 'none',
            className: _MainHeader2.default.header_btn,
            style: {
              userSelect: 'none',
              cursor: 'pointer',
              height: '100%',
              width: 80,
              marginRight: 30,
              textAlign: 'center',
              lineHeight: '50px'
            },
            onClick: function onClick() {
              _this2.to('/manage');
            }
          },
          '\u7BA1\u7406'
        ),
        AppState.userAuth ? _react2.default.createElement(
          _popover2.default,
          { placement: 'bottomRight', title: null, content: account, trigger: 'click' },
          _react2.default.createElement('img', {
            style: styles.headIcon,
            src: url,
            alt: ''
          })
        ) : _react2.default.createElement(
          'div',
          {
            role: 'none',
            style: {
              userSelect: 'none',
              cursor: 'pointer',
              height: '100%',
              width: 100,
              textAlign: 'center',
              lineHeight: '50px'
            },
            onClick: function onClick() {
              _this2.to('/login');
            }
          },
          '\u767B\u5F55'
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

  return MainHeader;
}(_react.Component)) || _class) || _class);

var _default = (0, _reactRouter.withRouter)(MainHeader);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', 'src/component/common/MainHeader.js');
  reactHotLoader.register(roles, 'roles', 'src/component/common/MainHeader.js');
  reactHotLoader.register(MainHeader, 'MainHeader', 'src/component/common/MainHeader.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/MainHeader.js');
  leaveModule(module);
})();

;