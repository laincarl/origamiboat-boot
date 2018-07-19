'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-26 15:52:03 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-26 16:03:46
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 一张试卷的一个题型 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var chinese = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

var PaperItem = function (_Component) {
  _inherits(PaperItem, _Component);

  function PaperItem() {
    _classCallCheck(this, PaperItem);

    return _possibleConstructorReturn(this, (PaperItem.__proto__ || Object.getPrototypeOf(PaperItem)).apply(this, arguments));
  }

  _createClass(PaperItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          chinese[index],
          '\u3001',
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

  return PaperItem;
}(_react.Component);

var _default = PaperItem;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(chinese, 'chinese', 'src/component/manage/PaperItem.js');
  reactHotLoader.register(PaperItem, 'PaperItem', 'src/component/manage/PaperItem.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/PaperItem.js');
  leaveModule(module);
})();

;