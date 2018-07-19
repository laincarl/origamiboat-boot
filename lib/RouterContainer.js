'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: LainCarl 
                   * @Date: 2018-03-05 20:33:22 
                   * @Last Modified by:   LainCarl 
                   * @Last Modified time: 2018-03-05 20:33:22 
                   */

var _react = require('react');

var _reactRouter = require('react-router');

var _mobxReact = require('mobx-react');

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouterContainer = (_dec = (0, _mobxReact.inject)('AppState'), _dec(_class = function (_Component) {
  _inherits(RouterContainer, _Component);

  function RouterContainer() {
    _classCallCheck(this, RouterContainer);

    return _possibleConstructorReturn(this, (RouterContainer.__proto__ || Object.getPrototypeOf(RouterContainer)).apply(this, arguments));
  }

  _createClass(RouterContainer, [{
    key: 'render',
    value: function render() {
      var AppState = this.props.AppState;

      AppState.setHistory(this.props.history);
      AppState.setCurrentLocation(this.props.location);
      return this.props.children;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterContainer;
}(_react.Component)) || _class);

var _default = (0, _reactRouter.withRouter)(RouterContainer);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterContainer, 'RouterContainer', 'src/RouterContainer.js');
  reactHotLoader.register(_default, 'default', 'src/RouterContainer.js');
  leaveModule(module);
})();

;