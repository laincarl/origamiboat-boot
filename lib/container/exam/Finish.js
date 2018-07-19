'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

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

var Finish = function (_Component) {
  _inherits(Finish, _Component);

  function Finish() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Finish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Finish.__proto__ || Object.getPrototypeOf(Finish)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user_score: 0,
      total_score: 0
    }, _this.toResult = function () {
      var id = _this.props.match.params.id;

      _AppState2.default.history.push('/exam/result/' + id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Finish, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.match.params.id;

      _Axios2.default.get('/exams/result?id=' + id).then(function (result) {
        console.log(result);
        var user_score = result.user_score,
            total_score = result.total_score;

        _this2.setState({
          user_score: user_score,
          total_score: total_score
        });
      }).catch(function (error) {
        if (error.response) {
          _AppState2.default.history.replace('/404');
        } else {
          console.log(error);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          user_score = _state.user_score,
          total_score = _state.total_score;

      return _react2.default.createElement(
        'div',
        { style: {
            width: '50%',
            height: '450px',
            borderRadius: '5px',
            margin: '50px auto',
            boxShadow: '0 2px 8px #ddd'
          }
        },
        _react2.default.createElement(
          'div',
          { style: {
              display: 'flex',
              borderRadius: '5px 5px 0 0',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#009ee7',
              color: 'white',
              fontSize: 20,
              height: 60
            }
          },
          _react2.default.createElement(_icon2.default, { type: 'check-circle', style: { marginRight: 8 } }),
          '\u7B54\u9898\u5DF2\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u52A0'
        ),
        _react2.default.createElement(
          'div',
          { style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20'
            }
          },
          _react2.default.createElement('img', {
            src: _AppState2.default.userInfo.url,
            alt: '',
            style: {
              width: 80,
              height: 80,
              borderRadius: '50%'
            }
          }),
          _react2.default.createElement(
            'div',
            { style: { fontSize: 20, marginTop: 5 } },
            _AppState2.default.userInfo.real_name
          ),
          _react2.default.createElement(
            'div',
            { style: { marginTop: 20 } },
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 'bold', fontSize: 28 } },
              user_score,
              '\u5206'
            ),
            _react2.default.createElement(
              'span',
              { style: { fontSize: 18, color: '#aaa', marginLeft: 3 } },
              '(',
              total_score,
              '\u5206)'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { fontSize: 18, color: '#aaa', margin: '10px 0 50px 0' } },
            user_score >= total_score * 0.8 ? '考的不错，再接再厉' : '下次继续努力，加油!'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              onClick: this.toResult,
              style: {
                background: '#ffa400',
                width: 150,
                color: 'white',
                border: 'none'
              }
            },
            '\u67E5\u770B\u5BF9\u9519'
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

  return Finish;
}(_react.Component);

var _default = Finish;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Finish, 'Finish', 'src/container/exam/Finish.js');
  reactHotLoader.register(_default, 'default', 'src/container/exam/Finish.js');
  leaveModule(module);
})();

;