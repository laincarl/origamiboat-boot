'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: LainCarl 
                   * @Date: 2018-03-05 20:35:03 
                   * @Last Modified by: LainCarl
                   * @Last Modified time: 2018-03-11 16:32:43
                   */

require('antd/lib/button/style');

require('antd/lib/input/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mobxReact = require('mobx-react');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

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
var Login = (_dec = (0, _mobxReact.inject)('AppState'), _dec(_class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleSubmit = function (e) {
      var _this$props = _this.props,
          history = _this$props.history,
          AppState = _this$props.AppState;

      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this.setState({
            spinning: true
          });
          _Axios2.default.post('/user/accesstoken', values).then(function (data) {
            console.log(data);
            _this.setState({
              spinning: false
            });
            _jsCookie2.default.set('token', data.token);
            _message3.default.success('登录成功');
            AppState.setUserAuth(true);
            history.push('/');
            window.location.reload();
          }).catch(function (error) {
            _this.setState({
              spinning: false
            });
            if (error.response) {
              console.log(error.response.data.message);
              _message3.default.error(error.response.data.message);
            } else {
              console.log(error);
            }
          });
          console.log('Received values of form: ', values);
        }
      });
    };

    _this.state = {
      spinning: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 登录过后，就跳出去
      var _props = this.props,
          history = _props.history,
          AppState = _props.AppState;

      if (AppState.userAuth) {
        history.push('/');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: { paddingTop: 100 } }),
        _react2.default.createElement(
          'div',
          { style: {
              width: 400,
              margin: '0 auto',
              padding: '20px 40px',
              boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'
            }
          },
          _react2.default.createElement(
            _Spin2.default,
            { spinning: this.state.spinning },
            _react2.default.createElement(
              'div',
              { style: { fontSize: '20px', marginBottom: '20px' } },
              '\u5E10\u53F7\u767B\u5F55'
            ),
            _react2.default.createElement(
              _form2.default,
              { onSubmit: this.handleSubmit },
              _react2.default.createElement(
                FormItem,
                { label: '\u5B66\u5DE5\u53F7' },
                getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入学工号!' }]
                })(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }) }))
              ),
              _react2.default.createElement(
                FormItem,
                { label: '\u5BC6\u7801' },
                getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }]
                })(_react2.default.createElement(_input2.default, { prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), type: 'password' }))
              ),
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', htmlType: 'submit', style: { width: '100%' } },
                '\u7ACB\u5373\u767B\u5F55'
              ),
              _react2.default.createElement(
                'div',
                { style: {
                    background: '#F8F9FA',
                    color: '#B6B6B7',
                    fontSize: '12px',
                    padding: '10px',
                    textAlign: 'center',
                    marginTop: '20px'
                  }
                },
                '\u9996\u6B21\u4F7F\u7528\u5B66\u5DE5\u53F7\u767B\u5F55\uFF0C\u521D\u59CB\u5BC6\u7801\u4E3A\u5B66\u5DE5\u53F7\u7684\u540E\u516D\u4F4D'
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

  return Login;
}(_react.Component)) || _class);

var _default = (0, _reactRouter.withRouter)(_form2.default.create()(Login));

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', 'src/container/Login.js');
  reactHotLoader.register(Login, 'Login', 'src/container/Login.js');
  reactHotLoader.register(_default, 'default', 'src/container/Login.js');
  leaveModule(module);
})();

;