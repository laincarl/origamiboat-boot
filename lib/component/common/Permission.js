'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mobxReact = require('mobx-react');

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-05 20:33:38 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by:   LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-05 20:33:38 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Permission = function Permission(WrappedComponent) {
  var _class;

  var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['student'];

  var WrapComponent = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(WrapComponent, _Component);

    function WrapComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WrapComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapComponent.__proto__ || Object.getPrototypeOf(WrapComponent)).call.apply(_ref, [this].concat(args))), _this), _this.checkAuth = function () {
        var userAuth = _AppState2.default.userAuth;

        if (!userAuth) {
          _this.props.history.replace('/login');
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WrapComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.checkAuth();
      }
    }, {
      key: 'componentWillReact',
      value: function componentWillReact() {
        this.checkAuth();
      }
    }, {
      key: 'render',
      value: function render() {
        var userAuth = _AppState2.default.userAuth,
            userInfo = _AppState2.default.userInfo;

        return userAuth && role.includes(userInfo.role) ? _react2.default.createElement(WrappedComponent, this.props) : null;
      }
    }, {
      key: '__reactstandin__regenerateByEval',
      // @ts-ignore
      value: function __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
      }
    }]);

    return WrapComponent;
  }(_react.Component)) || _class;

  return (0, _reactRouter.withRouter)(WrapComponent);
};

var _default = Permission;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Permission, 'Permission', 'src/component/common/Permission.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/Permission.js');
  leaveModule(module);
})();

;