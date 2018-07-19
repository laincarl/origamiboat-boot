'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = require('react-hot-loader');

var _history = require('history');

var _reactRouterDom = require('react-router-dom');

var _mobxReact = require('mobx-react');

var _MainHeader = require('MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

var _container = require('./container');

var _RouterContainer = require('./RouterContainer');

var _RouterContainer2 = _interopRequireDefault(_RouterContainer);

var _AppState = require('./store/AppState');

var _AppState2 = _interopRequireDefault(_AppState);

require('./App.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-05 20:33:32 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-23 17:24:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import { HashRouter as Router } from 'react-router-dom';


var stores = {
  // Key can be whatever you want
  AppState: _AppState2.default
  // ...other stores
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _mobxReact.Provider,
        stores,
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          { history: _history.createBrowserHistory },
          _react2.default.createElement(
            'div',
            { style: { height: '100%', display: 'flex', flexDirection: 'column' } },
            _react2.default.createElement(_MainHeader2.default, null),
            _react2.default.createElement(
              _RouterContainer2.default,
              null,
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _container.Home }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _container.Login }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/manage', component: _container.ManageRoute }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/account', component: _container.Account }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/exam', component: _container.ExamRoute }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _container.NotFoundPage }),
                _react2.default.createElement(_reactRouterDom.Redirect, { from: '*', to: '/404' })
              )
            )
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

  return App;
}(_react.Component);

var _default = (0, _reactHotLoader.hot)(module)(App);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(stores, 'stores', 'src/App.js');
  reactHotLoader.register(App, 'App', 'src/App.js');
  reactHotLoader.register(_default, 'default', 'src/App.js');
  leaveModule(module);
})();

;