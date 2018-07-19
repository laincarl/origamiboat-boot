'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _ExamStore = require('../../store/exam/ExamStore');

var _ExamStore2 = _interopRequireDefault(_ExamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OneQuestionBlock = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(OneQuestionBlock, _Component);

  function OneQuestionBlock() {
    _classCallCheck(this, OneQuestionBlock);

    return _possibleConstructorReturn(this, (OneQuestionBlock.__proto__ || Object.getPrototypeOf(OneQuestionBlock)).apply(this, arguments));
  }

  _createClass(OneQuestionBlock, [{
    key: 'render',
    value: function render() {
      console.log('render');
      var _props = this.props,
          num = _props.num,
          id = _props.id;

      var checked = _ExamStore2.default.answers[id];
      return _react2.default.createElement(
        'div',
        { style: {
            width: 40,
            height: 40,
            boxShadow: '1px 0 0 0 #ddd,0 1px 0 0 #ddd, 1px 1px 0 0 #ddd, 1px 0 0 0 #ddd inset, 0 1px 0 0 #ddd inset',
            lineHeight: '40px',
            textAlign: 'center',
            background: checked && '#52c41a',
            color: checked && 'white'
          }
        },
        num
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

  return OneQuestionBlock;
}(_react.Component)) || _class;

var _default = OneQuestionBlock;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OneQuestionBlock, 'OneQuestionBlock', 'src/component/exam/OneQuestionBlock.js');
  reactHotLoader.register(_default, 'default', 'src/component/exam/OneQuestionBlock.js');
  leaveModule(module);
})();

;