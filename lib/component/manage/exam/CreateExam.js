'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/input-number/style');

require('antd/lib/input/style');

require('antd/lib/message/style');

require('antd/lib/select/style');

require('antd/lib/form/style');

require('antd/lib/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-04-03 14:49:27 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-04-05 17:25:39
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 创建一个考试 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var RangePicker = _datePicker2.default.RangePicker;

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

// function ranges(start, end) {
//   const result = [];
//   for (let i = start; i < end; i += 1) {
//     result.push(i);
//   }
//   return result;
// }

function disabledDate(current) {
  // 今天之前的天不可选
  return current && current < (0, _moment2.default)().endOf('day').subtract(1, 'days');
}

// function disabledRangeTime(_, type) {
//   if (type === 'start') {
//     return {
//       disabledHours: () => ranges(0, 60).splice(4, 20),
//       disabledMinutes: () => ranges(30, 60),
//       disabledSeconds: () => [55, 56],
//     };
//   }
//   return {
//     disabledHours: () => ranges(0, 60).splice(20, 4),
//     disabledMinutes: () => ranges(0, 31),
//     disabledSeconds: () => [55, 56],
//   };
// }

var CreateExam = function (_Component) {
  _inherits(CreateExam, _Component);

  function CreateExam() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateExam);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateExam.__proto__ || Object.getPrototypeOf(CreateExam)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      papers: []
    }, _this.getPapers = function () {
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/papers').then(function (papers) {
        _this.setState({
          papers: papers,
          loading: false
        });
      });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.setState({ loading: true });
          // moment(range[0]).format('YYYY-MM-DD HH:mm:ss')
          console.log(values);
          var range = values.range;

          var exam = _extends({}, values, { range: { start_time: range[0], end_time: range[1] } });
          _Axios2.default.post('/exams/new', exam).then(function (data) {
            console.log(data);
            _message3.default.success('创建成功');
            _this.setState({ loading: false });
            _this.props.handleCancel();
          }).catch(function () {
            _this.setState({ loading: false });
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateExam, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPapers();
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _state = this.state,
          loading = _state.loading,
          papers = _state.papers;

      var options = papers.map(function (paper) {
        return _react2.default.createElement(
          Option,
          { value: paper.id },
          ' ',
          paper.title
        );
      });
      return _react2.default.createElement(
        _Spin2.default,
        { spinning: loading },
        _react2.default.createElement(
          _modal2.default,
          {
            visible: true,
            title: '\u65B0\u5EFA\u8003\u8BD5',
            onCancel: this.props.handleCancel,
            footer: null
          },
          _react2.default.createElement(
            _form2.default,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              FormItem,
              {
                label: '\u540D\u79F0'
              },
              getFieldDecorator('title', {
                rules: [{
                  max: 30, message: '最长30个字'
                }, {
                  required: true, message: '名称不能为空'
                }]
              })(_react2.default.createElement(_input2.default, null))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u8BD5\u5377'
              },
              getFieldDecorator('paper_id', {
                rules: [{
                  required: true, message: '请选择试卷'
                }]
              })(_react2.default.createElement(
                _select2.default,
                null,
                options
              ))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u95F4'
              },
              getFieldDecorator('range', {
                rules: [{
                  required: true, message: '请选择开始和结束日期'
                }]
              })(_react2.default.createElement(RangePicker, {
                style: { width: '100%' },
                disabledDate: disabledDate
                // disabledTime={disabledRangeTime}
                , showTime: {
                  hideDisabledOptions: true,
                  defaultValue: [(0, _moment2.default)('00:00:00', 'HH:mm:ss'), (0, _moment2.default)('23:59:59', 'HH:mm:ss')]
                },
                format: 'YYYY-MM-DD HH:mm:ss'
              }))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u8003\u8BD5\u65F6\u95F4\uFF08\u5206\u949F\uFF09'
              },
              getFieldDecorator('limit_time', {
                initialValue: 50,
                rules: [{
                  required: true, message: '请填写考试时间'
                }]
              })(_react2.default.createElement(_inputNumber2.default, { min: 1, max: 500 }))
            ),
            _react2.default.createElement(
              FormItem,
              null,
              _react2.default.createElement(
                'div',
                { style: { textAlign: 'right' } },
                _react2.default.createElement(
                  _button2.default,
                  { key: 'back', onClick: this.handleCancel, style: { marginRight: 10 } },
                  '\u53D6\u6D88'
                ),
                _react2.default.createElement(
                  _button2.default,
                  { key: 'submit', type: 'primary', loading: loading, htmlType: 'submit' },
                  '\u786E\u5B9A'
                )
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

  return CreateExam;
}(_react.Component);

var _default = _form2.default.create()(CreateExam);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RangePicker, 'RangePicker', 'src/component/manage/exam/CreateExam.js');
  reactHotLoader.register(FormItem, 'FormItem', 'src/component/manage/exam/CreateExam.js');
  reactHotLoader.register(Option, 'Option', 'src/component/manage/exam/CreateExam.js');
  reactHotLoader.register(disabledDate, 'disabledDate', 'src/component/manage/exam/CreateExam.js');
  reactHotLoader.register(CreateExam, 'CreateExam', 'src/component/manage/exam/CreateExam.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/exam/CreateExam.js');
  leaveModule(module);
})();

;