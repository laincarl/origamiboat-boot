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

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/input-number/style');

require('antd/lib/input/style');

require('antd/lib/select/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var AddPaperItem = function (_Component) {
  _inherits(AddPaperItem, _Component);

  function AddPaperItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddPaperItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddPaperItem.__proto__ || Object.getPrototypeOf(AddPaperItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      banks: [],
      loading: false
    }, _this.getBanks = function (type) {
      var resetFields = _this.props.form.resetFields;

      resetFields('bank');
      console.log(type);
      _this.setState({
        loading: true
      });
      _Axios2.default.get(type ? '/banks?type=' + type : '/banks').then(function (banks) {
        _this.setState({
          banks: banks,
          loading: false
        });
      });
    }, _this.handleCancel = function () {
      _this.props.handleCancel();
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.props.handleSubmit(values);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddPaperItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBanks();
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _state = this.state,
          loading = _state.loading,
          banks = _state.banks;

      var options = banks.map(function (bank) {
        return _react2.default.createElement(
          Option,
          { value: bank.id },
          bank.title
        );
      });
      return _react2.default.createElement(
        _modal2.default,
        {
          visible: true,
          title: '\u6DFB\u52A0\u5927\u9898',
          onCancel: this.handleCancel,
          footer: null
        },
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            _form2.default,
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              FormItem,
              {
                label: '\u9898\u578B'
              },
              getFieldDecorator('type', {
                rules: [{
                  required: true, message: '请选择题型'
                }]
              })(_react2.default.createElement(
                _select2.default,
                { onChange: this.getBanks },
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
              ))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u9898\u5E93'
              },
              getFieldDecorator('bank', {
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
                label: '\u9898\u6570'
              },
              getFieldDecorator('limit_time', {
                rules: [{
                  required: true, message: '请填写题数'
                }]
              })(_react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_inputNumber2.default, { min: 1, max: 50 })
              ))
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
                  { key: 'submit', type: 'primary', htmlType: 'submit' },
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

  return AddPaperItem;
}(_react.Component);

var _default = _form2.default.create()(AddPaperItem);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', 'src/component/manage/AddPaperItem.js');
  reactHotLoader.register(Option, 'Option', 'src/component/manage/AddPaperItem.js');
  reactHotLoader.register(AddPaperItem, 'AddPaperItem', 'src/component/manage/AddPaperItem.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/AddPaperItem.js');
  leaveModule(module);
})();

;