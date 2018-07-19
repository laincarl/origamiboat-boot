'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Permission = require('Permission');

var _Permission2 = _interopRequireDefault(_Permission);

var _PermissionMenu = require('component/common/PermissionMenu');

var _PermissionMenu2 = _interopRequireDefault(_PermissionMenu);

var _CheckPermission = require('util/CheckPermission');

var _CheckPermission2 = _interopRequireDefault(_CheckPermission);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _ExamRoute = require('./exam/ExamRoute');

var _ExamRoute2 = _interopRequireDefault(_ExamRoute);

var _PaperRoute = require('./paper/PaperRoute');

var _PaperRoute2 = _interopRequireDefault(_PaperRoute);

var _UserRoute = require('./user/UserRoute');

var _UserRoute2 = _interopRequireDefault(_UserRoute);

var _BankRoute = require('./bank/BankRoute');

var _BankRoute2 = _interopRequireDefault(_BankRoute);

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-05-19 16:24:04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import Analyze from './analyze/Analyze';

var menus = [{
  path: 'main',
  icon: 'home',
  text: '基本信息',
  component: _Main2.default
}, {
  path: 'user',
  icon: 'user',
  text: '用户管理',
  permission: ['admin'],
  component: (0, _Permission2.default)(_UserRoute2.default, ['admin'])
}, {
  path: 'bank',
  icon: 'profile',
  text: '题库管理',
  component: _BankRoute2.default
}, {
  path: 'paper',
  icon: 'copy',
  text: '试卷管理',
  component: _PaperRoute2.default
}, {
  path: 'exam',
  icon: 'switcher',
  text: '考试管理',
  component: _ExamRoute2.default
}];

var Manage = function (_Component) {
  _inherits(Manage, _Component);

  function Manage() {
    _classCallCheck(this, Manage);

    return _possibleConstructorReturn(this, (Manage.__proto__ || Object.getPrototypeOf(Manage)).apply(this, arguments));
  }

  _createClass(Manage, [{
    key: 'render',
    value: function render() {
      var match = this.props.match;
      // console.log(this.props);

      menus = menus.filter(function (menu) {
        return !menu.permission || (0, _CheckPermission2.default)(menu.permission);
      });
      // console.log(menus);
      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', height: '100%' } },
        _react2.default.createElement(_PermissionMenu2.default, { menus: menus }),
        _react2.default.createElement(
          'div',
          { style: { flex: 1 } },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            menus.map(function (menu) {
              return _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/' + menu.path, component: menu.component });
            }),
            _react2.default.createElement(_reactRouterDom.Redirect, { from: '' + match.url, to: match.url + '/main' })
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

  return Manage;
}(_react.Component);

var _default = (0, _Permission2.default)(Manage, ['admin', 'teacher']);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(menus, 'menus', 'src/container/manage/ManageRoute.js');
  reactHotLoader.register(Manage, 'Manage', 'src/container/manage/ManageRoute.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/ManageRoute.js');
  leaveModule(module);
})();

;