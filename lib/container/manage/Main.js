'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = require('antd/lib/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: LainCarl 
                   * @Date: 2018-03-05 20:34:40 
                   * @Last Modified by: LainCarl
                   * @Last Modified time: 2018-03-08 18:50:55
                   */

require('antd/lib/pagination/style');

require('antd/lib/table/style');

require('antd/lib/button/style');

require('antd/lib/select/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = _input2.default.Group;
var Option = _select2.default.Option;

function toDetail(id) {
  _AppState2.default.history.push('/exam/result/' + id);
}
var columns = [{
  title: '学号',
  dataIndex: 'user',
  key: 'user',
  render: function render(user) {
    return user.name;
  }
  // sorter: (a, b) => compare(a.title, b.title),
}, {
  title: '学生名字',
  dataIndex: 'user',
  key: 'real_name',
  render: function render(user) {
    return user.real_name;
  }
  // sorter: (a, b) => compare(a.title, b.title),
}, {
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
var Main = (_dec = (0, _mobxReact.inject)('AppState'), _dec(_class = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      filter: 'real_name',
      current_page: 0,
      total_page: 0,
      results: []
    }, _this.getResults = function () {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var filterText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      console.log(page);
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/exams/manage/results?page=' + (page || 0) + '&filter=' + filter + '&filterText=' + filterText).then(function (data) {
        var total_page = data.total_page,
            current_page = data.current_page,
            count = data.count,
            results = data.results;

        _this.setState({
          loading: false,
          current_page: current_page,
          total_page: total_page,
          results: results
        });
        console.log({ total_page: total_page, current_page: current_page, count: count });
      });
    }, _this.search = function (e) {
      var filter = _this.state.filter;

      var filterText = e.target.value;
      console.log(_this.state.filter, e.target.value);
      _this.getResults(0, filter, filterText);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Main, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getResults();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          loading = _state.loading,
          results = _state.results,
          filter = _state.filter,
          current_page = _state.current_page,
          total_page = _state.total_page;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          title: '\u57FA\u672C\u4FE1\u606F',
          refresh: this.getResults
        }),
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            InputGroup,
            { compact: true },
            _react2.default.createElement(
              _select2.default,
              {
                defaultValue: filter,
                onChange: function onChange(value) {
                  _this2.setState({ filter: value });
                }
              },
              _react2.default.createElement(
                Option,
                { value: 'real_name' },
                '\u5B66\u751F\u540D\u5B57'
              ),
              _react2.default.createElement(
                Option,
                { value: 'exam_title' },
                '\u8003\u8BD5\u540D\u79F0'
              )
            ),
            _react2.default.createElement(_input2.default, { style: { width: '50%' }, placeholder: '\u8F93\u5165\u5173\u952E\u5B57', onPressEnter: this.search })
          ),
          _react2.default.createElement(_table2.default, {
            pagination: false,
            columns: columns,
            dataSource: results.map(function (result) {
              return _extends({}, result, { key: result.id });
            })
          }),
          _react2.default.createElement(
            'div',
            { style: { display: 'flex' } },
            _react2.default.createElement('div', { className: 'flex-space' }),
            _react2.default.createElement(_pagination2.default, {
              style: {
                marginTop: 30,
                marginRight: 50
              },
              onChange: function onChange(page) {
                console.log(page);
                _this2.getResults(page - 1);
              },
              current: current_page + 1,
              pageSize: 1,
              total: total_page
            })
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

  return Main;
}(_react.Component)) || _class);
var _default = Main;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputGroup, 'InputGroup', 'src/container/manage/Main.js');
  reactHotLoader.register(Option, 'Option', 'src/container/manage/Main.js');
  reactHotLoader.register(toDetail, 'toDetail', 'src/container/manage/Main.js');
  reactHotLoader.register(columns, 'columns', 'src/container/manage/Main.js');
  reactHotLoader.register(Main, 'Main', 'src/container/manage/Main.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/Main.js');
  leaveModule(module);
})();

;