'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _OnePart = require('component/common/OnePart');

var _OnePart2 = _interopRequireDefault(_OnePart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-03-22 14:21:10 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-05-07 11:37:53
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 根据id展示特定考试结果
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import AppState from 'AppState';


var Result = function (_Component) {
  _inherits(Result, _Component);

  function Result() {
    _classCallCheck(this, Result);

    var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this));

    _this.state = {
      loading: true,
      result: {
        exam_id: 0,
        exam_title: '',
        user_score: 0,
        parts: []
      }
    };
    return _this;
  }

  _createClass(Result, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props.match.params);
      var id = this.props.match.params.id;

      _Axios2.default.get('/exams/result?id=' + id).then(function (result) {
        console.log(result);
        // ExamStore.setResult(result);
        _this2.setState({
          result: result,
          loading: false
        });
      }).catch(function (error) {
        if (error.response) {
          _message3.default.error(error.response.data.message);
          // AppState.history.replace('/404');
        } else {
          console.log(error);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          result = _state.result,
          loading = _state.loading;
      var user_score = result.user_score,
          total_score = result.total_score,
          limit_time = result.limit_time,
          exam_title = result.exam_title,
          parts = result.parts;

      console.log(parts);
      return _react2.default.createElement(
        'div',
        null,
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
              exam_title
            ),
            _react2.default.createElement(
              'div',
              { style: { textAlign: 'center', marginTop: 20 } },
              '\u672C\u8BD5\u5377\u5171' + parts.length + '\u5927\u9898\uFF0C\u603B\u5206' + total_score + '\u5206\uFF0C\u8003\u8BD5\u65F6\u95F4' + limit_time + '\u5206\u949F'
            ),
            _react2.default.createElement(
              'div',
              { style: { margin: '10px 0 20px 0', fontSize: 18 } },
              '\u5F97\u5206\uFF1A',
              user_score
            ),
            parts.map(function (part, i) {
              return _react2.default.createElement(_OnePart2.default, { mode: 'result', index: i, part: part });
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

  return Result;
}(_react.Component);

var _default = Result;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Result, 'Result', 'src/container/exam/Result.js');
  reactHotLoader.register(_default, 'default', 'src/container/exam/Result.js');
  leaveModule(module);
})();

;