'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _progress = require('antd/lib/progress');

var _progress2 = _interopRequireDefault(_progress);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

require('antd/lib/progress/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _question = require('component/common/question');

var _Constants = require('Constants');

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-28 13:11:28 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-03-28 13:36:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 单个题库的详情 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BankDetail = function (_Component) {
  _inherits(BankDetail, _Component);

  function BankDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BankDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BankDetail.__proto__ || Object.getPrototypeOf(BankDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bank: {},
      questions: [],
      buttonLoading: false,
      loading: true
    }, _this.getBank = function (page) {
      var id = _this.props.match.params.id;

      _Axios2.default.get('/banks/bank?id=' + id + '&page=' + (page || 0)).then(function (data) {
        var bank = data.bank;
        var questions = data.questions;
        // console.log(data);

        if (page !== 0) {
          questions = [].concat(_toConsumableArray(_this.state.questions), _toConsumableArray(questions));
        }
        _this.setState({
          bank: bank,
          questions: questions,
          loading: false,
          buttonLoading: false
        });
      });
    }, _this.init = function () {
      _this.setState({ loading: true });
      _this.getBank(0);
    }, _this.loadNextPage = function () {
      _this.setState({
        buttonLoading: true
      });
      var current_page = _this.state.bank.current_page;

      console.log(current_page);
      _this.getBank(current_page + 1);
    }, _this.toImport = function () {
      var _this$props = _this.props,
          history = _this$props.history,
          match = _this$props.match;
      var id = match.params.id;

      console.log(history, match);
      history.push('/manage/bank/import/' + id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BankDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          buttonLoading = _state.buttonLoading,
          bank = _state.bank,
          questions = _state.questions;
      var title = bank.title,
          type = bank.type,
          count = bank.count,
          current_page = bank.current_page,
          total_page = bank.total_page;
      // console.log(questions);

      var Question = _question.SelectSingle;
      switch (type) {
        case 'select_single':
          Question = _question.SelectSingle;
          break;
        case 'select_multi':
          Question = _question.SelectMulti;
          break;
        case 'blank':
          Question = _question.Blank;
          break;
        default:
          break;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '导入试题',
            onClick: this.toImport
          }],
          refresh: this.init,
          title: '\u9898\u5E93\u8BE6\u60C5'
        }),
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            'div',
            {
              style: {
                padding: '10px 24px'
              }
            },
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center', margin: '10px 0' } },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  {
                    style: {
                      fontSize: '16px',
                      color: 'rgba(0,0,0,0.87)',
                      fontWeight: 'bold',
                      width: '280px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    },
                    title: title
                  },
                  '\u540D\u79F0\uFF1A',
                  title
                ),
                _react2.default.createElement(
                  'div',
                  {
                    style: {
                      fontSize: '16px',
                      color: 'rgba(0,0,0,0.87)',
                      fontWeight: 'bold',
                      width: '280px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    },
                    title: title
                  },
                  '\u7C7B\u578B\uFF1A',
                  _Constants.questionType[type]
                )
              ),
              _react2.default.createElement('div', { className: 'flex-space' }),
              _react2.default.createElement(_progress2.default, { type: 'circle', percent: 100, width: 80, format: function format() {
                  return '\u9898\u6570:' + count;
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              questions.map(function (question, i) {
                return _react2.default.createElement(Question, { mode: 'show', index: i, num: i + 1, data: question });
              })
            ),
            current_page + 1 < total_page && _react2.default.createElement(
              'div',
              { style: { textAlign: 'center', marginBottom: 50 } },
              _react2.default.createElement(
                _button2.default,
                { loading: buttonLoading, type: 'primary', onClick: this.loadNextPage },
                '\u52A0\u8F7D\u66F4\u591A'
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

  return BankDetail;
}(_react.Component);

var _default = BankDetail;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BankDetail, 'BankDetail', 'src/container/manage/bank/BankDetail.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/bank/BankDetail.js');
  leaveModule(module);
})();

;