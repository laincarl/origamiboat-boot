'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var radioStyle = {
  height: '30px',
  lineHeight: '30px'
};

var QuestionShow = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(QuestionShow, _Component);

  function QuestionShow() {
    _classCallCheck(this, QuestionShow);

    return _possibleConstructorReturn(this, (QuestionShow.__proto__ || Object.getPrototypeOf(QuestionShow)).apply(this, arguments));
  }

  _createClass(QuestionShow, [{
    key: 'render',
    value: function render() {
      console.log('render');

      var _props = this.props,
          num = _props.num,
          data = _props.data;
      var title = data.title,
          selects = data.selects,
          answers = data.answers;

      return _react2.default.createElement(
        'div',
        {
          style: { margin: '18px 0', position: 'relative', paddingRight: 50 }
          // onMouseEnter={() => { this.setState({ hover: true }); }}
          // onMouseLeave={() => { this.setState({ hover: false }); }}
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: { fontWeight: 'bold' } },
            num,
            '.'
          ),
          ' ',
          title
        ),
        _react2.default.createElement(
          'div',
          { style: { marginTop: '8px' } },
          Object.keys(selects).map(function (key) {
            return _react2.default.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center', color: answers.includes(key) && '#52c41a' } },
              _react2.default.createElement(
                'div',
                { style: { width: '30px', overflow: 'hidden', fontWeight: 'bold' } },
                key,
                ' . '
              ),
              _react2.default.createElement(
                'div',
                { style: radioStyle },
                selects[key]
              )
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

  return QuestionShow;
}(_react.Component)) || _class;

var _default = QuestionShow;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(radioStyle, 'radioStyle', 'src/component/manage/paper/QuestionShow.js');
  reactHotLoader.register(QuestionShow, 'QuestionShow', 'src/component/manage/paper/QuestionShow.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/paper/QuestionShow.js');
  leaveModule(module);
})();

;