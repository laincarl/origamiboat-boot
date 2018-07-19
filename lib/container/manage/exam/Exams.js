'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Action = require('Action');

var _Action2 = _interopRequireDefault(_Action);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _CreateExam = require('component/manage/exam/CreateExam');

var _CreateExam2 = _interopRequireDefault(_CreateExam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-04-03 14:40:15 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-06-04 20:35:02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 展示考试列表 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function compare(param1, param2) {
  // 如果两个参数均为字符串类型
  if (typeof param1 === 'string' && typeof param2 === 'string') {
    return param1.localeCompare(param2);
  }
  // 如果参数1为数字，参数2为字符串
  if (typeof param1 === 'number' && typeof param2 === 'string') {
    return -1;
  }
  // 如果参数1为字符串，参数2为数字
  if (typeof param1 === 'string' && typeof param2 === 'number') {
    return 1;
  }
  // 如果两个参数均为数字
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    if (param1 > param2) return 1;
    if (param1 === param2) return 0;
    if (param1 < param2) return -1;
  }
  return 0;
}

var Exams = function (_Component) {
  _inherits(Exams, _Component);

  function Exams() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Exams);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Exams.__proto__ || Object.getPrototypeOf(Exams)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      exams: [],
      loading: false,
      visible: false
    }, _this.getExams = function () {
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/exams').then(function (exams) {
        if (exams) {
          _this.setState({
            exams: exams,
            loading: false
          });
        }
      });
    }, _this.dataTransForm = function (exams) {
      return exams.map(function (exam) {
        var range = exam.range,
            id = exam.id;

        var status = '未开启';
        var color = '#52c41a';
        var during = '';
        if ((0, _moment2.default)(range.start_time).isBefore(new Date()) && (0, _moment2.default)(range.end_time).isAfter(new Date())) {
          status = '进行中';
          during = (0, _moment2.default)().to(range.end_time) + '\u5173\u95ED';
        } else if ((0, _moment2.default)(range.start_time).isAfter(new Date())) {
          color = '#1890ff';
          status = '未开启';
          during = (0, _moment2.default)().to(range.start_time) + '\u5F00\u542F';
        }if ((0, _moment2.default)(range.end_time).isBefore(new Date())) {
          color = '#FF9915';
          status = '已结束';
        }
        return _extends({}, exam, {
          key: id, status: status, color: color, during: during
        });
      });
    }, _this.createExam = function () {
      _this.setState({
        visible: true
      });
    }, _this.toDetail = function (id) {
      _AppState2.default.history.push('/manage/exam/detail/' + id);
    }, _this.closeExam = function (id) {
      _Axios2.default.delete('/exams/exam?id=' + id).then(function (data) {
        _this.getExams();
        _message3.default.success('删除成功');
        console.log(data);
      });
    }, _this.handleCancel = function () {
      _this.setState({
        visible: false
      });
      _this.getExams();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Exams, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getExams();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          exams = _state.exams,
          visible = _state.visible,
          loading = _state.loading;

      var columns = [{
        title: '名称',
        dataIndex: 'title',
        key: 'title',
        sorter: function sorter(a, b) {
          return compare(a.title, b.title);
        }
      }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        filters: [{
          text: '未开始',
          value: '未开始'
        }, {
          text: '进行中',
          value: '进行中'
        }, {
          text: '已结束',
          value: '已结束'
        }],
        filterMultiple: true,
        onFilter: function onFilter(value, record) {
          return record.status === value;
        },
        render: function render(text, record) {
          var status = record.status,
              color = record.color,
              during = record.during;

          return _react2.default.createElement(
            'div',
            { style: { color: color }, title: during },
            status
          );
        }
      }, {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time'
      }, {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time',
        render: function render(text, record) {
          var range = record.range;

          return _react2.default.createElement(
            'div',
            null,
            (0, _moment2.default)(range.start_time).format('YYYY-MM-DD HH:mm:ss')
          );
        }
      }, {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time',
        render: function render(text, record) {
          var range = record.range;

          return _react2.default.createElement(
            'div',
            null,
            (0, _moment2.default)(range.end_time).format('YYYY-MM-DD HH:mm:ss')
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
                e.stopPropagation();
              }
            },
            _react2.default.createElement(_Action2.default, { data: [{
                action: function action() {
                  _this2.toDetail(record.id);
                },
                text: '详情'
              }, {
                action: function action() {
                  _this2.closeExam(record.id);
                },
                text: '删除'
              }]
            })
          );
        }
      }];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          title: '\u8003\u8BD5\u7BA1\u7406',
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '新建考试',
            onClick: this.createExam
          }],
          refresh: this.getExams
        }),
        visible && _react2.default.createElement(_CreateExam2.default, { handleCancel: this.handleCancel }),
        _react2.default.createElement(
          'div',
          { style: { padding: '20px' } },
          _react2.default.createElement(_table2.default, {
            rowKey: 'id',
            columns: columns,
            dataSource: this.dataTransForm(exams),
            loading: loading
          })
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

  return Exams;
}(_react.Component);

var _default = Exams;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(compare, 'compare', 'src/container/manage/exam/Exams.js');
  reactHotLoader.register(Exams, 'Exams', 'src/container/manage/exam/Exams.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/exam/Exams.js');
  leaveModule(module);
})();

;