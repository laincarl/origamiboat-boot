'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

require('antd/lib/input/style');

require('antd/lib/input-number/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/select/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _NumberToChinese = require('util/NumberToChinese');

var _NumberToChinese2 = _interopRequireDefault(_NumberToChinese);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-26 13:39:24 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-26 16:18:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 新建试卷 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var CreatePaper = function (_Component) {
  _inherits(CreatePaper, _Component);

  function CreatePaper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreatePaper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreatePaper.__proto__ || Object.getPrototypeOf(CreatePaper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      banks: [],
      loading: false,
      items: [{
        type: 'select_single',
        num: 0
      }]
    }, _this.getBanks = function () {
      var resetFields = _this.props.form.resetFields;

      resetFields('banks');
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/banks').then(function (banks) {
        _this.setState({
          banks: banks,
          loading: false
        });
      });
    }, _this.addItem = function (values) {
      console.log(values);
    }, _this.remove = function (index) {
      var items = _this.state.items;

      if (items.length > 1) {
        items.splice(index, 1);
        _this.setState({
          items: items
        });
      } else {
        _message3.default.info('至少含有一个大题');
      }
    }, _this.add = function () {
      var items = _this.state.items;

      _this.setState({ items: [].concat(_toConsumableArray(items), [[].concat(_toConsumableArray({}))]) });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          var title = values.title,
              banks = values.banks,
              nums = values.nums,
              scores = values.scores,
              types = values.types;

          var paper = {
            title: title,
            parts: types.map(function (type, i) {
              return {
                type: type,
                bank_id: banks[i],
                num: nums[i],
                score: scores[i]
              };
            })
          };
          _Axios2.default.post('/papers/new', paper).then(function (data) {
            console.log(data);
            _message3.default.success('创建成功');
            _this.setState({ loading: false });
          }).catch(function (error) {
            if (error.response) {
              _message3.default.error(error.response.data.message);
            } else {
              console.log(error);
            }
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreatePaper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBanks();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue,
          resetFields = _props$form.resetFields;
      var _state = this.state,
          items = _state.items,
          loading = _state.loading,
          banks = _state.banks;

      var formItemLayout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 8 }
      };
      var total_score = 0;
      var formItems = items.map(function (item, index) {
        var type = getFieldValue('types[' + index + ']');
        var score = getFieldValue('scores[' + index + ']');
        var num = getFieldValue('nums[' + index + ']');
        total_score += score * num || 0;
        var options = banks.filter(function (bank) {
          return bank.type === type;
        }).map(function (bank) {
          return _react2.default.createElement(
            Option,
            { value: bank.id },
            bank.title
          );
        });
        return _react2.default.createElement(
          'div',
          { style: { position: 'relative' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, {
                label: '\u7B2C' + (0, _NumberToChinese2.default)(index + 1) + '\u5927\u9898\uFF1A'
              }),
              score * num || 0,
              '\u5206'
            ),
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, {
                label: '\u9898\u578B'
              }),
              _react2.default.createElement(
                'div',
                { style: { position: 'relative' } },
                getFieldDecorator('types[' + index + ']', {
                  rules: [{
                    required: true,
                    message: "Please input passenger's name or delete this field."
                  }]
                })(_react2.default.createElement(
                  _select2.default,
                  {
                    onSelect: function onSelect() {
                      resetFields('banks[' + index + ']');
                    }
                  },
                  _react2.default.createElement(
                    Option,
                    { value: 'select_single' },
                    '\u5355\u9009\u9898'
                  ),
                  _react2.default.createElement(
                    Option,
                    { value: 'select_multi' },
                    '\u591A\u9009\u9898'
                  ),
                  _react2.default.createElement(
                    Option,
                    { value: 'blank' },
                    '\u586B\u7A7A\u9898'
                  )
                )),
                _react2.default.createElement(_icon2.default, {
                  style: { position: 'absolute', top: 9, right: -28 },
                  className: 'dynamic-delete-button',
                  type: 'minus-circle-o',
                  onClick: function onClick() {
                    return _this2.remove(index);
                  }
                })
              )
            ),
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, {
                label: '\u9898\u5E93'
              }),
              getFieldDecorator('banks[' + index + ']', {
                rules: [{
                  required: true, message: '请选择题库'
                }]
              })(_react2.default.createElement(
                _select2.default,
                null,
                options
              ))
            ),
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, {
                label: '\u9898\u6570'
              }),
              getFieldDecorator('nums[' + index + ']', {
                initialValue: 10,
                rules: [{
                  required: true,
                  message: "Please input passenger's name or delete this field."
                }]
              })(_react2.default.createElement(_inputNumber2.default, { min: 1, max: 20 }))
            ),
            _react2.default.createElement(
              FormItem,
              _extends({}, formItemLayout, {
                label: '\u5355\u9879\u5206\u6570'
              }),
              getFieldDecorator('scores[' + index + ']', {
                initialValue: 1,
                rules: [{
                  required: true,
                  message: "Please input passenger's name or delete this field."
                }]
              })(_react2.default.createElement(_inputNumber2.default, { min: 1, max: 20 }))
            )
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { style: { height: '100%', display: 'flex', flexDirection: 'column' } },
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          title: '\u65B0\u5EFA\u8BD5\u5377',
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '添加大题',
            onClick: this.add
          }],
          refresh: this.getBanks
        }),
        _react2.default.createElement(
          'div',
          { style: { padding: 20, flex: 1, overflow: 'auto' } },
          _react2.default.createElement(
            _Spin2.default,
            { spinning: loading },
            _react2.default.createElement(
              _form2.default,
              { onSubmit: this.handleSubmit },
              _react2.default.createElement(
                FormItem,
                _extends({}, formItemLayout, {
                  label: '\u6807\u9898'
                }),
                getFieldDecorator('title', {
                  rules: [{
                    required: true,
                    message: '请输入标题'
                  }]
                })(_react2.default.createElement(_input2.default, null))
              ),
              _react2.default.createElement(
                FormItem,
                _extends({}, formItemLayout, {
                  label: '\u603B\u5206\uFF1A'
                }),
                total_score,
                '\u5206'
              ),
              formItems,
              _react2.default.createElement(
                FormItem,
                null,
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', htmlType: 'submit', style: { marginLeft: 100, width: 100 } },
                  '\u4FDD\u5B58'
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

  return CreatePaper;
}(_react.Component);

var _default = _form2.default.create()(CreatePaper);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', 'src/container/manage/paper/CreatePaper.js');
  reactHotLoader.register(Option, 'Option', 'src/container/manage/paper/CreatePaper.js');
  reactHotLoader.register(CreatePaper, 'CreatePaper', 'src/container/manage/paper/CreatePaper.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/paper/CreatePaper.js');
  leaveModule(module);
})();

;