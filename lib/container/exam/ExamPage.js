'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
             * @Author: LainCarl 
             * @Date: 2018-03-06 16:03:55 
             * @Last Modified by: LainCarl
             * @Last Modified time: 2018-04-05 15:52:51
             */

// import { message } from 'antd';


require('antd/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _ShowAnswers = require('component/exam/ShowAnswers');

var _ShowAnswers2 = _interopRequireDefault(_ShowAnswers);

var _OnePart = require('component/common/OnePart');

var _OnePart2 = _interopRequireDefault(_OnePart);

var _ExamStore = require('store/exam/ExamStore');

var _ExamStore2 = _interopRequireDefault(_ExamStore);

var _ExamEnd = require('./ExamEnd');

var _ExamEnd2 = _interopRequireDefault(_ExamEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var ExamPage = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(ExamPage, _Component);

  function ExamPage() {
    _classCallCheck(this, ExamPage);

    var _this = _possibleConstructorReturn(this, (ExamPage.__proto__ || Object.getPrototypeOf(ExamPage)).call(this));

    _this.getExam = function () {
      var id = _this.props.match.params.id;

      _Axios2.default.get('/exams/exam?id=' + id).then(function (exam) {
        if (exam.message) {
          _this.setState({ end: true, message: exam.message });
        }
        console.log(exam);
        _ExamStore2.default.setCurrentExam(exam);
        _this.setState({
          loading: false
        });
      }).catch(function (error) {
        if (error.message) {
          _this.setState({ end: true, message: error.message });
        }
      });
    };

    _this.state = {
      loading: true,
      end: false,
      message: ''
    };
    return _this;
  }

  _createClass(ExamPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      confirm({
        title: '确认参加考试?',
        content: '每位同学只能参加一次考试',
        onOk: function onOk() {
          that.getExam();
        },
        onCancel: function onCancel() {
          _AppState2.default.history.goBack();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          end = _state.end,
          message = _state.message;
      var _ExamStore$currentExa = _ExamStore2.default.currentExam,
          parts = _ExamStore$currentExa.parts,
          title = _ExamStore$currentExa.title;

      console.log(parts);
      return end ? _react2.default.createElement(_ExamEnd2.default, { message: message }) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ShowAnswers2.default, null),
        _react2.default.createElement(
          _Spin2.default,
          { spinning: loading },
          _react2.default.createElement(
            'div',
            { style: {
                width: '700px',
                minHeight: '500px',
                margin: '20px auto',
                padding: '20px 40px',
                boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'
              }
            },
            _react2.default.createElement(
              'div',
              { style: { fontSize: 25, textAlign: 'center', marginTop: 10 } },
              title
            ),
            parts.map(function (part, i) {
              return _react2.default.createElement(_OnePart2.default, { mode: 'exam', index: i, part: part });
            })
            // questions.map((one, i) => <QuestionShow num={i + 1} data={one} />)

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

  return ExamPage;
}(_react.Component)) || _class;

var _default = ExamPage;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(confirm, 'confirm', 'src/container/exam/ExamPage.js');
  reactHotLoader.register(ExamPage, 'ExamPage', 'src/container/exam/ExamPage.js');
  reactHotLoader.register(_default, 'default', 'src/container/exam/ExamPage.js');
  leaveModule(module);
})();

;