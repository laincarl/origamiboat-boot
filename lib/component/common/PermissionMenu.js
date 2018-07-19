'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: LainCarl 
                   * @Date: 2018-03-05 20:33:56 
                   * @Last Modified by: LainCarl
                   * @Last Modified time: 2018-03-28 15:14:09
                   */

require('antd/lib/menu/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PermissionMenu = (_dec = (0, _mobxReact.inject)('AppState'), _dec(_class = function (_Component) {
  _inherits(PermissionMenu, _Component);

  function PermissionMenu() {
    _classCallCheck(this, PermissionMenu);

    return _possibleConstructorReturn(this, (PermissionMenu.__proto__ || Object.getPrototypeOf(PermissionMenu)).apply(this, arguments));
  }

  _createClass(PermissionMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          AppState = _props.AppState,
          match = _props.match,
          history = _props.history,
          menus = _props.menus;

      var currentMenu = AppState.currentLocation.pathname;
      // console.log(match.url);
      // 匹配当前级别路由地址
      var pathReg = new RegExp(match.url + '/[^/]*?((?=/)|$)');
      if (currentMenu.match(pathReg)) {
        var _currentMenu$match = currentMenu.match(pathReg);

        var _currentMenu$match2 = _slicedToArray(_currentMenu$match, 1);

        currentMenu = _currentMenu$match2[0];
      }
      // console.log(currentMenu);
      // console.log('/manage/main/aa'.match(/\/manage\/[^/]*?((?=\/)|$)/));
      // console.log(AppState.currentLocation.pathname);
      return _react2.default.createElement(
        'div',
        { style: { borderRight: '1px solid rgb(211, 211, 211)', background: 'white' } },
        _react2.default.createElement(
          _menu2.default,
          {
            mode: 'inline',
            style: { width: 256, background: 'white' },
            selectedKeys: [currentMenu],
            onClick: function onClick(_ref) {
              var key = _ref.key;

              // console.log(key);
              if (currentMenu !== key) {
                history.push(key);
              }
            }
          },
          menus.map(function (menu) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: match.url + '/' + menu.path },
              _react2.default.createElement(_icon2.default, { type: menu.icon }),
              menu.text
            );
          })
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

  return PermissionMenu;
}(_react.Component)) || _class);

var _default = (0, _reactRouter.withRouter)(PermissionMenu);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PermissionMenu, 'PermissionMenu', 'src/component/common/PermissionMenu.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/PermissionMenu.js');
  leaveModule(module);
})();

;