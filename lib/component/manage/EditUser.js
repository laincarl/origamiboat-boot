'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/checkbox/style');

require('antd/lib/input/style');

require('antd/lib/message/style');

require('antd/lib/form/style');

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var EditUser = function (_Component) {
  _inherits(EditUser, _Component);

  function EditUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditUser.__proto__ || Object.getPrototypeOf(EditUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      data: {}
    }, _this.getUser = function (id) {
      _Axios2.default.get('/user?id=' + id).then(function (data) {
        console.log(data);
        _this.setState({
          data: data,
          loading: false
        });
      });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          hideModal = _this$props.hideModal,
          reload = _this$props.reload;

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          // console.log(values);
          _this.setState({
            loading: true
          });
          _Axios2.default.put('/user/edituser', _extends({}, values, { id: _this.props.currentEditId })).then(function () {
            hideModal();
            _message3.default.success('修改成功');
            reload();
            // console.log(data);
          }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data.message);
              _message3.default.error(error.response.data.message);
            } else {
              console.log(error);
            }
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditUser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var currentEditId = this.props.currentEditId;

      this.getUser(currentEditId);
    }
  }, {
    key: 'render',
    value: function render() {
      var hideModal = this.props.hideModal;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _state = this.state,
          loading = _state.loading,
          data = _state.data;
      var name = data.name,
          real_name = data.real_name,
          role = data.role;

      return _react2.default.createElement(
        _modal2.default,
        {
          visible: true,
          title: '\u4FEE\u6539\u7528\u6237',
          onCancel: hideModal,
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
                label: '\u5B66\u5DE5\u53F7'
              },
              getFieldDecorator('name', {
                initialValue: name,
                rules: [{
                  max: 30, message: '最长30个字'
                }, {
                  required: true, message: '请输入用户名'
                }]
              })(_react2.default.createElement(_input2.default, null))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u771F\u5B9E\u59D3\u540D'
              },
              getFieldDecorator('real_name', {
                initialValue: real_name,
                rules: [{
                  max: 30, message: '最长30个字'
                }, {
                  required: true, message: '请输入姓名'
                }]
              })(_react2.default.createElement(_input2.default, null))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u5BC6\u7801'
              },
              getFieldDecorator('initPassword', {
                initialValue: false
              })(_react2.default.createElement(
                _checkbox2.default,
                null,
                '\u521D\u59CB\u5316\u5BC6\u7801'
              ))
            ),
            _react2.default.createElement(
              FormItem,
              {
                label: '\u8EAB\u4EFD'
              },
              getFieldDecorator('role', {
                initialValue: role,
                rules: [{
                  required: true, message: '请选择身份'
                }]
              })(_react2.default.createElement(
                _select2.default,
                null,
                _react2.default.createElement(
                  Option,
                  { value: 'student' },
                  '\u5B66\u751F'
                ),
                _react2.default.createElement(
                  Option,
                  { value: 'teacher' },
                  '\u6559\u5E08'
                ),
                _react2.default.createElement(
                  Option,
                  { value: 'admin' },
                  '\u7BA1\u7406\u5458'
                )
              ))
            ),
            _react2.default.createElement(
              FormItem,
              null,
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', htmlType: 'submit' },
                '\u786E\u5B9A'
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

  return EditUser;
}(_react.Component);

var _default = _form2.default.create()(EditUser);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, 'Option', 'src/component/manage/EditUser.js');
  reactHotLoader.register(FormItem, 'FormItem', 'src/component/manage/EditUser.js');
  reactHotLoader.register(EditUser, 'EditUser', 'src/component/manage/EditUser.js');
  reactHotLoader.register(_default, 'default', 'src/component/manage/EditUser.js');
  leaveModule(module);
})();

;