'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
             * @Author: LainCarl 
             * @Date: 2018-03-14 14:03:36 
             * @Last Modified by: LainCarl
             * @Last Modified time: 2018-05-19 22:26:19
             */

require('antd/lib/input/style');

require('antd/lib/table/style');

require('antd/lib/icon/style');

require('antd/lib/button/style');

require('antd/lib/message/style');

require('antd/lib/tabs/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _account = require('css/account.less');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var TabPane = _tabs2.default.TabPane;

function beforeUpload(file) {
  var isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJPG) {
    _message3.default.error('只能上传图片文件!');
  }
  var isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    _message3.default.error('图片不能超过2MB!');
  }
  return isJPG && isLt2M;
}
function toDetail(id) {
  _AppState2.default.history.push('/exam/result/' + id);
}
var styles = {
  headIconBig: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  }
};
var columns = [{
  title: '考试名称',
  dataIndex: 'exam_title',
  key: 'exam_title'
  // sorter: (a, b) => compare(a.title, b.title),
}, {
  title: '分数',
  dataIndex: 'user_score',
  key: 'user_score'
}, {
  title: '总分',
  dataIndex: 'total_score',
  key: 'total_score'
}, {
  title: '考试时间',
  dataIndex: 'limit_time',
  key: 'limit_time'
}, {
  title: '参加时间',
  dataIndex: 'create_time',
  key: 'create_time',
  render: function render(create_time) {
    return _react2.default.createElement(
      'div',
      null,
      (0, _moment2.default)(create_time).format('YYYY-MM-DD HH:mm:ss')
    );
  }
}, {
  title: '操作',
  key: 'action',
  render: function render(text, record) {
    return _react2.default.createElement(
      'div',
      {
        role: 'none',
        onClick: function onClick(e) {
          e.stopPropagation();console.log(record);
        }
      },
      _react2.default.createElement(
        _button2.default,
        {
          type: 'primary',
          style: {
            width: 100,
            height: 30
          },
          onClick: function onClick() {
            toDetail(record.exam_id);
          }
        },
        '\u67E5\u770B\u8BE6\u60C5'
      )
    );
  }
}];

var Home = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      results: []
    }, _this.getResults = function () {
      _Axios2.default.get('/exams/results').then(function (results) {
        _this.setState({
          loading: false,
          results: results
        });
      });
    }, _this.callback = function (key) {
      console.log(key);
    }, _this.handleUpload = function (e) {
      if (beforeUpload(e.target.files[0])) {
        console.log(e.target.files[0]);
        var formData = new FormData();
        formData.append('file', e.target.files[0]);
        _Axios2.default.post('/user/head', formData).then(function (data) {
          _AppState2.default.setUserInfo({ url: data.url });
        });
      }
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log(values);
          _Axios2.default.post('/user/reset_password', values).then(function (data) {
            console.log(data);
            _message3.default.success('更改成功');
            _this.setState({ loading: false });
          }).catch(function () {
            _this.setState({ loading: false });
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getResults();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          results = _state.results;
      var _AppState$userInfo = _AppState2.default.userInfo,
          name = _AppState$userInfo.name,
          url = _AppState$userInfo.url;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 3 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 3
          }
        }
      };
      return _react2.default.createElement(
        'div',
        { style: {
            margin: '20px auto',
            width: '70%',
            minHeight: 500,
            padding: 20,
            boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'
          }
        },
        _react2.default.createElement(
          'h2',
          null,
          '\u4E2A\u4EBA\u4E2D\u5FC3'
        ),
        _react2.default.createElement(
          'div',
          { className: _account2.default.title },
          name
        ),
        _react2.default.createElement(
          'div',
          { style: { width: 100, height: 100, position: 'relative' }, className: _account2.default.container },
          _react2.default.createElement('input', {
            type: 'file',
            title: '\u66F4\u6362\u5934\u50CF',
            className: _account2.default.input_upload,
            onChange: this.handleUpload,
            style: {
              position: 'absolute', width: '100%', height: '100%', borderRadius: '50%'
            }
          }),
          _react2.default.createElement('img', {
            style: styles.headIconBig,
            src: url,
            alt: ''
          }),
          _react2.default.createElement(
            'div',
            { className: _account2.default.replace_icon },
            '\u66F4\u6362\u5934\u50CF'
          )
        ),
        _react2.default.createElement(
          _tabs2.default,
          { defaultActiveKey: '1', onChange: this.callback },
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_icon2.default, { type: 'file-text' }),
                '\u8003\u8BD5\u8BB0\u5F55'
              ), key: '1' },
            _react2.default.createElement(_table2.default, {
              columns: columns,
              dataSource: results.map(function (result) {
                return _extends({}, result, { key: result.id });
              }),
              loading: loading
            })
          ),
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_icon2.default, { type: 'form' }),
                '\u66F4\u6539\u5BC6\u7801'
              ), key: '2' },
            _react2.default.createElement(
              'div',
              { style: { marginTop: 20 } },
              _react2.default.createElement(
                _form2.default,
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, {
                    label: '\u65E7\u5BC6\u7801'
                  }),
                  getFieldDecorator('password_old', {
                    rules: [{
                      required: true,
                      message: '请输入旧密码'
                    }]
                  })(_react2.default.createElement(_input2.default, null))
                ),
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, {
                    label: '\u65B0\u5BC6\u7801'
                  }),
                  getFieldDecorator('password', {
                    rules: [{
                      required: true,
                      message: '请输入密码'
                    }]
                  })(_react2.default.createElement(_input2.default, null))
                ),
                _react2.default.createElement(
                  FormItem,
                  _extends({}, formItemLayout, {
                    label: '\u518D\u6B21\u8F93\u5165\u5BC6\u7801'
                  }),
                  getFieldDecorator('password_repeat', {
                    rules: [{
                      required: true,
                      message: '请输入密码'
                    }]
                  })(_react2.default.createElement(_input2.default, null))
                ),
                _react2.default.createElement(
                  FormItem,
                  tailFormItemLayout,
                  _react2.default.createElement(
                    _button2.default,
                    { type: 'primary', htmlType: 'submit', style: { width: 100 } },
                    '\u66F4\u6539'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_icon2.default, { type: 'bar-chart' }),
                '\u7EDF\u8BA1\u4FE1\u606F'
              ), key: '3' },
            '\u7EDF\u8BA122'
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

  return Home;
}(_react.Component)) || _class;

var _default = _form2.default.create()(Home);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, 'FormItem', 'src/container/account/Home.js');
  reactHotLoader.register(TabPane, 'TabPane', 'src/container/account/Home.js');
  reactHotLoader.register(beforeUpload, 'beforeUpload', 'src/container/account/Home.js');
  reactHotLoader.register(toDetail, 'toDetail', 'src/container/account/Home.js');
  reactHotLoader.register(styles, 'styles', 'src/container/account/Home.js');
  reactHotLoader.register(columns, 'columns', 'src/container/account/Home.js');
  reactHotLoader.register(Home, 'Home', 'src/container/account/Home.js');
  reactHotLoader.register(_default, 'default', 'src/container/account/Home.js');
  leaveModule(module);
})();

;