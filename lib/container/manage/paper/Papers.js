'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/icon/style');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Papers = function (_Component) {
  _inherits(Papers, _Component);

  function Papers() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Papers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Papers.__proto__ || Object.getPrototypeOf(Papers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      papers: [],
      loading: false
    }, _this.getPapers = function () {
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/papers').then(function (papers) {
        if (papers) {
          _this.setState({
            papers: papers,
            loading: false
          });
        }
      });
    }, _this.toCreate = function () {
      _AppState2.default.history.push('/manage/paper/create');
    }, _this.toDetail = function (id) {
      _AppState2.default.history.push('/manage/paper/detail/' + id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Papers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPapers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          papers = _state.papers,
          loading = _state.loading;

      var columns = [{
        title: '名称',
        dataIndex: 'title',
        key: 'title'
      },
      // {
      //   title: '状态',
      //   dataIndex: 'status',
      //   key: 'status',
      // }, 
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time'
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
                  _this2.editExam(record.id);
                },
                text: '编辑'
              }]
            })
          );
        }
      }];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          title: '\u8BD5\u5377\u7BA1\u7406',
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '新建试卷',
            onClick: this.toCreate
          }],
          refresh: this.getPapers
        }),
        _react2.default.createElement(
          'div',
          { style: { padding: '20px' } },
          _react2.default.createElement(_table2.default, {
            onRow: function onRow(record) {
              return {
                onClick: function onClick() {
                  _this2.toDetail(record.id);
                } // 点击行
              };
            },
            rowKey: 'id',
            columns: columns,
            dataSource: papers.map(function (one) {
              return _extends({}, one, { key: one.id });
            }),
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

  return Papers;
}(_react.Component);

var _default = Papers;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Papers, 'Papers', 'src/container/manage/paper/Papers.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/paper/Papers.js');
  leaveModule(module);
})();

;