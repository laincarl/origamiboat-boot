'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/checkbox/style');

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-05-07 11:24:11 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-05-07 11:24:39
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 单个多选题的组件，包括答题，展示以及结果展示 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var styles = {
  keyStyle: {
    width: '30px',
    lineHeight: '30px',
    fontWeight: 'bold'
  },
  radioStyle: {
    flex: 1,
    display: 'block',
    // height: '30px',
    lineHeight: '30px'
  },
  showStyle: {
    flex: 1,
    lineHeight: '30px'
  }
};

var SelectMulti = function (_Component) {
  _inherits(SelectMulti, _Component);

  function SelectMulti() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectMulti);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectMulti.__proto__ || Object.getPrototypeOf(SelectMulti)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (checkedValues) {
      var _this$props = _this.props,
          part = _this$props.part,
          index = _this$props.index;
      var id = _this.props.data.id;


      console.log(id, part, index, checkedValues);
      _ExamStore2.default.setAnswer(id, part, index, checkedValues);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectMulti, [{
    key: 'render',
    value: function render() {
      console.log('render');
      var right = false;
      var _props = this.props,
          num = _props.num,
          data = _props.data,
          mode = _props.mode;
      var id = data.id,
          title = data.title,
          selects = data.selects,
          answers = data.answers,
          user_answer = data.user_answer;
      var keyStyle = styles.keyStyle,
          radioStyle = styles.radioStyle,
          showStyle = styles.showStyle;

      var oneQuestion = void 0;
      switch (mode) {
        case 'exam':
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
              title
            ),
            _react2.default.createElement(
              _checkbox2.default.Group,
              { onChange: this.onChange },
              _react2.default.createElement(
                'div',
                { style: { marginTop: '8px' } },
                Object.keys(selects).map(function (key) {
                  return _react2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _react2.default.createElement(
                      'div',
                      { style: keyStyle },
                      key,
                      ' . '
                    ),
                    _react2.default.createElement(
                      _checkbox2.default,
                      { key: '' + id + key, style: radioStyle, value: key },
                      selects[key]
                    )
                  );
                })
              )
            )
          );
          break;
        case 'result':
          right = user_answer && user_answer.length === answers.length && user_answer.every(function (one) {
            return answers.includes(one);
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
              title
            ),
            !user_answer ? _react2.default.createElement(
              'div',
              { style: { color: 'red', marginTop: 5 } },
              '\u672A\u4F5C\u7B54'
            ) : null,
            _react2.default.createElement(
              'div',
              { style: { marginTop: '8px' } },
              Object.keys(selects).map(function (key) {
                return _react2.default.createElement(
                  'div',
                  { style: {
                      display: 'flex',
                      // 正确答案绿色
                      color: answers.includes(key) && '#52c41a'
                    }
                  },
                  _react2.default.createElement(
                    'div',
                    { style: keyStyle },
                    key,
                    ' . '
                  ),
                  _react2.default.createElement(
                    'div',
                    { style: radioStyle },
                    selects[key]
                  )
                );
              }),
              user_answer && _react2.default.createElement(
                'div',
                { style: { marginTop: 10, color: !right && 'red' } },
                '\u4F60\u7684\u7B54\u6848\uFF1A',
                user_answer.join('、')
              )
            )
          );
          break;
        case 'show':
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
              title
            ),
            _react2.default.createElement(
              'div',
              { style: { marginTop: '8px' } },
              Object.keys(selects).map(function (key) {
                return _react2.default.createElement(
                  'div',
                  { style: { display: 'flex', color: answers.includes(key) && '#52c41a' } },
                  _react2.default.createElement(
                    'div',
                    { style: keyStyle },
                    key,
                    ' . '
                  ),
                  _react2.default.createElement(
                    'div',
                    { style: showStyle },
                    selects[key]
                  )
                );
              })
            )
          );
          break;
        default:
          break;
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

  return SelectMulti;
}(_react.Component);

var _default = SelectMulti;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', 'src/component/common/question/SelectMulti.js');
  reactHotLoader.register(SelectMulti, 'SelectMulti', 'src/component/common/question/SelectMulti.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/question/SelectMulti.js');
  leaveModule(module);
})();

;