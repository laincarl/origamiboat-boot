'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/button/style');

require('antd/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _OnePart = require('../common/OnePart');

var _OnePart2 = _interopRequireDefault(_OnePart);

var _ExamStore = require('../../store/exam/ExamStore');

var _ExamStore2 = _interopRequireDefault(_ExamStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var ShowAnswers = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(ShowAnswers, _Component);

  function ShowAnswers() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShowAnswers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowAnswers.__proto__ || Object.getPrototypeOf(ShowAnswers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      time: {
        sec: 0,
        min: 0,
        hour: 0
      },
      loading: false
    }, _this.start = function () {
      // 设置timer，更新倒计时
      _this.timer = setInterval(function () {
        var end_time = _ExamStore2.default.currentExam.end_time;

        if (end_time) {
          // 取卷时间加考试时间限制，算出截止时间
          // const end_time = moment(start_time).add(limit_time, 'minutes');
          // 截止时间减去当前时间，算出时差，单位毫秒
          var during = _moment2.default.duration((0, _moment2.default)(end_time) - (0, _moment2.default)(), 'ms');
          // console.log(during);
          // 如果时间差大于0则还没到时间限制
          if (during > 0) {
            var hour = during.get('hours');
            var min = during.get('minutes');
            var sec = during.get('seconds');
            _this.setState({
              time: { sec: sec, min: min, hour: hour }
            });
          } else {
            console.log('时间到');
            clearInterval(_this.timer);
          }
        }
      }, 1000);
    }, _this.handleSubmit = function () {
      var answers = _ExamStore2.default.answers,
          currentExam = _ExamStore2.default.currentExam;
      var id = currentExam.id,
          paper_id = currentExam.paper_id,
          title = currentExam.title;

      console.log(id, paper_id, answers);
      _this.setState({
        loading: true
      });
      _Axios2.default.post('/exams/submit', {
        id: id, title: title, paper_id: paper_id, answers: answers
      }).then(function (result) {
        console.log(result);
        // const { score, results } = result;
        _this.setState({
          loading: false
        });
        // ExamStore.setResult(result);
        _AppState2.default.history.push('/exam/finish/' + currentExam.id);
      }).catch(function (error) {
        console.log(error);
        // message.error(error.response.data.message);
        _this.setState({
          loading: false
        });
      });
    }, _this.showConfirm = function () {
      confirm({
        title: '确认交卷?',
        content: '交卷后将不可重新答题',
        okText: '确定',
        cancelText: '取消',
        onOk: _this.handleSubmit,
        onCancel: function onCancel() {
          console.log('Cancel');
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShowAnswers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.setTime();
      this.start();
      window.onbeforeunload = function () {
        return 'You have unsaved changes!';
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.onbeforeunload = null;
      clearInterval(this.timer);
    }
    // setTime = () => {
    //   const startTime = new Date();
    //   startTime.setMinutes(startTime.getMinutes() + 1);
    //   localStorage.setItem('start_time', startTime);
    // }

  }, {
    key: 'render',
    value: function render() {
      var parts = _ExamStore2.default.currentExam.parts;
      var _state = this.state,
          time = _state.time,
          loading = _state.loading;
      var sec = time.sec,
          min = time.min,
          hour = time.hour;
      // console.log(questions);

      return _react2.default.createElement(
        'div',
        { style: {
            position: 'fixed',
            boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
            background: 'white',
            bottom: 50,
            left: 20,
            zIndex: 10,
            width: 250,
            // height: 350,
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        },
        _react2.default.createElement(
          'div',
          { style: { fontSize: 18, fontWeight: 'bold', margin: '10px 0' } },
          '\u6B63\u5728\u8003\u8BD5\u4E2D'
        ),
        _react2.default.createElement(
          'div',
          null,
          parts.map(function (part, i) {
            return _react2.default.createElement(_OnePart2.default, { mode: 'side', index: i, part: part });
          })
        ),
        _react2.default.createElement(
          'div',
          { style: { margin: '15px 0 5px 0' } },
          '\u8003\u8BD5\u5012\u8BA1\u65F6'
        ),
        _react2.default.createElement(
          'div',
          null,
          hour + '\u65F6' + min + '\u5206' + sec + '\u79D2'
        ),
        _react2.default.createElement('div', { className: 'flex-space' }),
        _react2.default.createElement(
          _button2.default,
          {
            loading: loading,
            style: {
              marginTop: 10,
              marginBottom: 10,
              background: '#52c41a',
              color: 'white',
              width: '90%'
            },
            onClick: this.showConfirm
          },
          '\u4EA4\u5377'
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

  return ShowAnswers;
}(_react.Component)) || _class;

var _default = ShowAnswers;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(confirm, 'confirm', 'src/component/exam/ShowAnswers.js');
  reactHotLoader.register(ShowAnswers, 'ShowAnswers', 'src/component/exam/ShowAnswers.js');
  reactHotLoader.register(_default, 'default', 'src/component/exam/ShowAnswers.js');
  leaveModule(module);
})();

;