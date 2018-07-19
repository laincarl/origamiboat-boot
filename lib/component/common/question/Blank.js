'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExamStore = require('store/exam/ExamStore');

var _ExamStore2 = _interopRequireDefault(_ExamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-05-07 11:23:10 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-05-07 11:23:39
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 单个填空题的组件，包括展示，答题，结果展示 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// const showStyle = {
//   height: '30px',
//   lineHeight: '30px',
// };
var styles = {
  input: {
    width: 100,
    margin: 5,
    border: 'none',
    borderBottom: '1px solid gray',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
};

var Blank = function (_Component) {
  _inherits(Blank, _Component);

  function Blank() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Blank);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Blank.__proto__ || Object.getPrototypeOf(Blank)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (i, e) {
      var _this$props = _this.props,
          part = _this$props.part,
          index = _this$props.index;
      var id = _this.props.data.id;


      console.log(id, part, index, e.target.value, i);
      var answer = _ExamStore2.default.answers[id];
      if (!_ExamStore2.default.answers[id]) {
        answer = Array(_this.amount);
      }
      answer[i] = e.target.value;
      _ExamStore2.default.setAnswer(id, part, index, answer);
      // console.log('radio checked', e.target.value);
      // this.setState({
      //   value: e.target.value,
      // });
    }, _this.returnRightColor = function (key, user_answer, answers) {
      var color = '';
      if (user_answer === key) {
        color = 'red';
      }
      if (answers.includes(key)) {
        color = '#52c41a';
      }
      return color;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Blank, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('render');
      // console.log(this.props);
      this.amount = 0;
      var _props = this.props,
          num = _props.num,
          data = _props.data,
          mode = _props.mode;
      var title = data.title,
          answers = data.answers,
          user_answer = data.user_answer;

      var oneQuestion = void 0;
      var arr = [];
      var pre = 0;
      // 将问题分开，找去空的位置
      for (var i = 0; i < title.length; i += 1) {
        if (title[i] === '{' && title[i + 1] === '}' && title[i - 1] !== '}') {
          arr.push(title.substring(pre, i));
          arr.push('{}');
          this.amount += 1;
          pre = i + 2;
        } else if (title[i] === '{' && title[i + 1] === '}' && title[i - 1] === '}') {
          arr.push('{}');
          this.amount += 1;
          pre = i + 2;
          // 当遇到末尾时，将末尾字符串写入
        } else if (i === title.length - 1) {
          arr.push(title.substring(pre));
        }
      }
      // console.log(arr);
      // console.log(title, arr);
      // console.log(title, title.split(/{}/));
      if (mode === 'exam') {
        var current = 0;
        var blank = arr.map(function (one) {
          if (one === '{}') {
            current += 1;
            return _react2.default.createElement('input', { type: 'text', style: styles.input, onChange: _this2.onChange.bind(_this2, current - 1) });
          } else {
            return one;
          }
        });
        oneQuestion = _react2.default.createElement(
          'div',
          {
            style: { margin: '18px 0', position: 'relative' }
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
            blank
          )
        );
      } else if (mode === 'result') {
        var _current = 0;
        console.log(user_answer);
        var _blank = arr.map(function (one) {
          if (one === '{}') {
            _current += 1;
            if (!user_answer || !user_answer[_current - 1]) {
              return _react2.default.createElement('input', {
                type: 'text',
                title: answers[_current - 1],
                style: _extends({}, styles.input, { textAlign: 'center', color: 'orange' }),
                readOnly: 'readonly',
                value: answers[_current - 1]
              });
            } else {
              return _react2.default.createElement('input', {
                type: 'text',
                title: user_answer[_current - 1],
                style: _extends({}, styles.input, { textAlign: 'center', color: user_answer[_current - 1] === answers[_current - 1] ? '#52c41a' : 'red' }),
                readOnly: 'readonly',
                value: user_answer[_current - 1]
              });
            }
          } else {
            return one;
          }
        });
        oneQuestion = _react2.default.createElement(
          'div',
          {
            style: { margin: '18px 0', position: 'relative', paddingRight: 50 }
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
            _blank
          )
        );
      } else if (mode === 'show') {
        var _current2 = 0;
        var _blank2 = arr.map(function (one) {
          if (one === '{}') {
            _current2 += 1;
            return _react2.default.createElement('input', { type: 'text', title: answers[_current2 - 1], style: _extends({}, styles.input, { textAlign: 'center', color: '#52c41a' }), readOnly: 'readonly', value: answers[_current2 - 1] });
          } else {
            return one;
          }
        });
        oneQuestion = _react2.default.createElement(
          'div',
          {
            style: { margin: '18px 0', position: 'relative', paddingRight: 50 }
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
            _blank2
          )
        );
      }

      return oneQuestion;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Blank;
}(_react.Component);

var _default = Blank;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', 'src/component/common/question/Blank.js');
  reactHotLoader.register(Blank, 'Blank', 'src/component/common/question/Blank.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/question/Blank.js');
  leaveModule(module);
})();

;