'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/input/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/select/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Constants = require('Constants');

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Bank = require('component/manage/Bank');

var _Bank2 = _interopRequireDefault(_Bank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-11 15:34:18 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-28 12:30:38
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var Banks = function (_Component) {
  _inherits(Banks, _Component);

  function Banks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Banks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Banks.__proto__ || Object.getPrototypeOf(Banks)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      banks: [],
      loading: false,
      visible: false
    }, _this.getBanks = function () {
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/banks').then(function (banks) {
        _this.setState({
          banks: banks,
          loading: false
        });
      });
    }, _this.showModal = function () {
      _this.setState({
        visible: true
      });
    }, _this.handleOk = function () {
      _this.setState({ loading: true });
      setTimeout(function () {
        _this.setState({ loading: false, visible: false });
      }, 3000);
    }, _this.handleCancel = function () {
      _this.setState({ visible: false });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.setState({ loading: true });
          console.log('Received values of form: ', values);
          _Axios2.default.post('/banks/new', values).then(function (data) {
            console.log(data);
            _message3.default.success('创建成功');
            _this.setState({ visible: false, loading: false });
            _this.getBanks();
          }).catch(function () {});
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Banks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBanks();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          banks = _state.banks,
          visible = _state.visible,
          loading = _state.loading;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      // console.log(questionType);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          title: '\u9898\u5E93\u7BA1\u7406',
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '新建题库',
            onClick: this.showModal
          }],
          refresh: this.getBanks
        }),
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            'div',
            { style: { display: 'flex', flexWrap: 'wrap' } },
            banks.map(function (one) {
              return _react2.default.createElement(_Bank2.default, { data: one });
            })
          )
        ),
        _react2.default.createElement(
          _modal2.default,
          {
            visible: visible,
            title: '\u65B0\u5EFA\u9898\u5E93',
            onCancel: this.handleCancel,
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
                label: '\u9898\u578B'
              },
              getFieldDecorator('type', {
                rules: [{
                  required: true, message: '请选择题型'
                }]
              })(_react2.default.createElement(
                _select2.default,
                null,
                Object.keys(_Constants.questionType).map(function (type) {
                  return _react2.default.createElement(
                    Option,
                    { value: type },
                    _Constants.questionType[type]
                  );
                })
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

  return Banks;
}(_react.Component);

var _default = _form2.default.create()(Banks);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', 'src/container/manage/bank/Banks.js');
  reactHotLoader.register(Option, 'Option', 'src/container/manage/bank/Banks.js');
  reactHotLoader.register(Banks, 'Banks', 'src/container/manage/bank/Banks.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/bank/Banks.js');
  leaveModule(module);
})();

;