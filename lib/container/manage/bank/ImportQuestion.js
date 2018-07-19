'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
             * @Author: LainCarl 
             * @Date: 2018-03-11 16:56:22 
             * @Last Modified by: LainCarl
             * @Last Modified time: 2018-04-25 12:40:48
             */

require('antd/lib/modal/style');

require('antd/lib/button/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _mobxReact = require('mobx-react');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _question = require('component/common/question');

var _QuestionStore = require('store/manage/bank/QuestionStore');

var _QuestionStore2 = _interopRequireDefault(_QuestionStore);

var _AnalyQuestion = require('util/AnalyQuestion');

var _AnalyQuestion2 = _interopRequireDefault(_AnalyQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;

var ImportQuestion = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(ImportQuestion, _Component);

  function ImportQuestion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImportQuestion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImportQuestion.__proto__ || Object.getPrototypeOf(ImportQuestion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      type: '',
      bank_id: null,
      question: '',
      loading: true
    }, _this.getBank = function () {
      _this.setState({ loading: true });
      var id = _this.props.match.params.id;

      _Axios2.default.get('/banks/bank?id=' + id + '&page=0').then(function (data) {
        var bank = data.bank;

        console.log(bank);
        var type = bank.type;

        _this.setState({
          bank_id: bank.id,
          type: type,
          loading: false
        });
      });
    }, _this.handleCancel = function () {
      _this.setState({
        visible: false
      });
    }, _this.showModal = function () {
      _this.setState({
        visible: true
      });
    }, _this.analyQuestion = function () {
      var data = _this.state.question;
      var _this$state = _this.state,
          bank_id = _this$state.bank_id,
          type = _this$state.type;

      console.log(bank_id, type);
      (0, _AnalyQuestion2.default)(data, bank_id, type).then(function (questions) {
        console.log(questions);
        _this.setState({
          visible: false
        });
        _QuestionStore2.default.setQuestions(questions);
      }).catch(function (error) {
        // console.log(error, error.message);
        _message3.default.error(error.message);
      });
    }, _this.handleSubmit = function () {
      var questions = _QuestionStore2.default.questions;

      _Axios2.default.post('/questions/new', questions).then(function (data) {
        console.log(data);
        _message3.default.success('导入成功');
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message);
          _message3.default.error(error.response.data.message);
        } else {
          console.log(error);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImportQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBank();
      _QuestionStore2.default.setQuestions([]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          type = _state.type,
          question = _state.question,
          loading = _state.loading,
          visible = _state.visible;

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
      var questions = _QuestionStore2.default.questions;

      return _react2.default.createElement(
        'div',
        { style: { height: '100%', display: 'flex', flexDirection: 'column' } },
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '导入试题',
            onClick: this.showModal
          }],
          title: '\u8BD5\u9898\u5BFC\u5165'
        }),
        _react2.default.createElement(
          _modal2.default,
          {
            visible: visible,
            title: '\u8BD5\u9898\u5BFC\u5165',
            width: 600,
            onCancel: this.handleCancel,
            footer: null
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(TextArea, {
              autosize: { minRows: 14, maxRows: 20 },
              value: question,
              onChange: function onChange(e) {
                _this2.setState({ question: e.target.value });
              }
            }),
            _react2.default.createElement(
              'div',
              { style: { textAlign: 'right' } },
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', onClick: this.analyQuestion, style: { marginTop: 10 } },
                '\u786E\u5B9A'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: {
              flex: 1, overflow: 'auto', padding: '10px 20px'
            }
          },
          _react2.default.createElement(
            _Spin2.default,
            { spinning: loading },
            questions.length === 0 && '没有可导入试题',
            questions.map(function (one, i) {
              return _react2.default.createElement(Question, { mode: 'show', key: Math.random(), num: i + 1, data: one, index: i });
            }),
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: this.handleSubmit, style: { marginTop: 10 } },
              '\u786E\u8BA4\u5BFC\u5165'
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

  return ImportQuestion;
}(_react.Component)) || _class;

var _default = ImportQuestion;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, 'TextArea', 'src/container/manage/bank/ImportQuestion.js');
  reactHotLoader.register(ImportQuestion, 'ImportQuestion', 'src/container/manage/bank/ImportQuestion.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/bank/ImportQuestion.js');
  leaveModule(module);
})();

;