'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/card/style');

require('antd/lib/tooltip/style');

require('antd/lib/icon/style');

require('antd/lib/tabs/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Chart = require('bizcharts/lib/components/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Geom = require('bizcharts/lib/components/Geom');

var _Geom2 = _interopRequireDefault(_Geom);

var _Axis = require('bizcharts/lib/components/Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Tooltip2 = require('bizcharts/lib/components/Tooltip');

var _Tooltip3 = _interopRequireDefault(_Tooltip2);

var _ExamDetail = require('./ExamDetail.less');

var _ExamDetail2 = _interopRequireDefault(_ExamDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-06-04 20:33:51 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-06-04 20:49:11
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 展示考试详情，当前考试人数，成绩等等 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import { Chart, Geom, Axis } from 'bizcharts';


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
  title: '分数',
  dataIndex: 'user_score',
  key: 'user_score'
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
// 定义度量
var cols = {
  score: { alias: '分数' },
  number: { alias: '学号' }
};
var TabPane = _tabs2.default.TabPane;

var ExamDetail = function (_Component) {
  _inherits(ExamDetail, _Component);

  function ExamDetail(props) {
    _classCallCheck(this, ExamDetail);

    var _this = _possibleConstructorReturn(this, (ExamDetail.__proto__ || Object.getPrototypeOf(ExamDetail)).call(this, props));

    _this.getDetail = function () {
      _this.setState({
        loading: true
      });
      var id = _this.props.match.params.id;

      _Axios2.default.get('/exams/exam/detail?id=' + id).then(function (exam) {
        _this.setState({
          exam: exam,
          loading: false
        });
      }).catch(function (error) {
        console.log(error);
        _this.setState({
          loading: false
        });
      });
    };

    _this.state = {
      loading: true,
      current: 1,
      exam: { results: [] }
    };
    return _this;
  }

  _createClass(ExamDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getDetail();
      console.log(this.props.match.params);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          exam = _state.exam,
          current = _state.current;
      var title = exam.title,
          results = exam.results,
          limit_time = exam.limit_time,
          total_score = exam.total_score;

      var num = results.length;
      console.log(current);
      var data = results.map(function (result) {
        var user = result.user,
            user_score = result.user_score;

        return {
          number: user.name,
          score: user_score
        };
      });
      // 数据源
      // const data = [
      //   { number: 'Sports', score: 275, income: 2300 },
      //   { number: 'Strategy', score: 115, income: 667 },
      //   { number: 'Action', score: 120, income: 982 },
      //   { number: 'Shooter', score: 350, income: 5271 },
      //   { number: 'Other', score: 150, income: 3710 },
      // ];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          title: '\u8003\u8BD5\u8BE6\u60C5',
          refresh: this.getDetail
        }),
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            'div',
            { style: { display: 'flex' } },
            _react2.default.createElement(
              _card2.default,
              {
                className: _ExamDetail2.default.card,
                title: '\u8003\u8BD5\u540D\u79F0',
                action: _react2.default.createElement(
                  _tooltip2.default,
                  { title: '\u6307\u6807\u8BF4\u660E' },
                  _react2.default.createElement(_icon2.default, { type: 'info-circle-o' })
                )
              },
              _react2.default.createElement(
                'div',
                { className: _ExamDetail2.default.content },
                title
              )
            ),
            _react2.default.createElement(
              _card2.default,
              {
                className: _ExamDetail2.default.card,
                title: '\u8003\u8BD5\u65F6\u95F4'
              },
              _react2.default.createElement(
                'div',
                { className: _ExamDetail2.default.content },
                limit_time,
                ' \u5206\u949F'
              )
            ),
            _react2.default.createElement(
              _card2.default,
              {
                className: _ExamDetail2.default.card,
                title: '\u8003\u8BD5\u603B\u5206'
              },
              _react2.default.createElement(
                'div',
                { className: _ExamDetail2.default.content },
                total_score,
                ' \u5206'
              )
            ),
            _react2.default.createElement(
              _card2.default,
              {
                className: _ExamDetail2.default.card,
                title: '\u5F53\u524D\u53C2\u52A0\u4EBA\u6570'
              },
              _react2.default.createElement(
                'div',
                { className: _ExamDetail2.default.content },
                num,
                ' \u4EBA'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: _ExamDetail2.default.tab_container
            },
            _react2.default.createElement(
              'div',
              { className: _ExamDetail2.default.tab_title },
              '\u6210\u7EE9\u7EDF\u8BA1'
            ),
            _react2.default.createElement(
              _tabs2.default,
              {
                defaultActiveKey: '1'
              },
              _react2.default.createElement(
                TabPane,
                { tab: '\u56FE\u8868', key: '1' },
                _react2.default.createElement(
                  'div',
                  { style: { marginTop: 30 } },
                  _react2.default.createElement(
                    _Chart2.default,
                    { height: 400, width: 800, data: data, scale: cols },
                    _react2.default.createElement(_Axis2.default, { name: 'number' }),
                    _react2.default.createElement(_Axis2.default, { name: 'score' }),
                    _react2.default.createElement(_Tooltip3.default, null),
                    _react2.default.createElement(_Geom2.default, { type: 'interval', size: 20, position: 'number*score', color: 'number' })
                  )
                )
              ),
              _react2.default.createElement(
                TabPane,
                { tab: '\u5217\u8868', key: '2' },
                _react2.default.createElement(_table2.default, {
                  pagination: { pageSize: 5 },
                  columns: columns,
                  dataSource: results.map(function (result) {
                    return _extends({}, result, { key: result.id });
                  })
                })
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

  return ExamDetail;
}(_react.Component);

var _default = ExamDetail;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(toDetail, 'toDetail', 'src/container/manage/exam/ExamDetail.js');
  reactHotLoader.register(columns, 'columns', 'src/container/manage/exam/ExamDetail.js');
  reactHotLoader.register(cols, 'cols', 'src/container/manage/exam/ExamDetail.js');
  reactHotLoader.register(TabPane, 'TabPane', 'src/container/manage/exam/ExamDetail.js');
  reactHotLoader.register(ExamDetail, 'ExamDetail', 'src/container/manage/exam/ExamDetail.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/exam/ExamDetail.js');
  leaveModule(module);
})();

;