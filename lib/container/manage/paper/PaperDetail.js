'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /*
             * @Author: LainCarl 
             * @Date: 2018-04-02 16:42:19 
             * @Last Modified by: LainCarl
             * @Last Modified time: 2018-04-02 18:08:40
             * @Feature: 展示试卷详情 
             */

require('antd/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _Spin = require('Spin');

var _Spin2 = _interopRequireDefault(_Spin);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _AppState = require('AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _OnePart = require('component/common/OnePart');

var _OnePart2 = _interopRequireDefault(_OnePart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaperDetail = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(PaperDetail, _Component);

  function PaperDetail() {
    _classCallCheck(this, PaperDetail);

    var _this = _possibleConstructorReturn(this, (PaperDetail.__proto__ || Object.getPrototypeOf(PaperDetail)).call(this));

    _this.getPaper = function () {
      var id = _this.props.match.params.id;

      _this.setState({ loading: true });
      _Axios2.default.get('/papers/paper?id=' + id).then(function (paper) {
        console.log(paper);
        var title = paper.title,
            parts = paper.parts;

        _this.setState({
          loading: false,
          title: title,
          parts: parts
        });
      }).catch(function (error) {
        if (error.response) {
          _message3.default.error(error.response.data.message);
          _AppState2.default.history.goBack();
        } else {
          console.log(error);
        }
      });
    };

    _this.state = {
      loading: true,
      parts: []
    };
    return _this;
  }

  _createClass(PaperDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPaper();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          title = _state.title,
          parts = _state.parts;

      var score_total = parts.reduce(function (total, part) {
        return total + part.score * part.num;
      }, 0);
      console.log(parts);
      return _react2.default.createElement(
        'div',
        { style: { height: '100%', display: 'flex', flexDirection: 'column' } },
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          title: '\u8BD5\u5377\u8BE6\u60C5',
          refresh: this.getPaper
        }),
        _react2.default.createElement(
          'div',
          { style: { flex: 1, overflow: 'auto' } },
          _react2.default.createElement(
            _Spin2.default,
            { spinning: loading },
            _react2.default.createElement(
              'div',
              { style: { fontSize: 25, textAlign: 'center', marginTop: 10 } },
              title
            ),
            _react2.default.createElement(
              'div',
              { style: { textAlign: 'center', marginTop: 20 } },
              '\u672C\u8BD5\u5377\u5171' + parts.length + '\u5927\u9898\uFF0C\u603B\u5206' + score_total + '\u5206'
            ),
            _react2.default.createElement(
              'div',
              { style: {
                  width: '700px',
                  minHeight: '500px',
                  margin: '20px auto',
                  padding: '20px 40px'
                  // boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
                }
              },
              parts.map(function (part, i) {
                return _react2.default.createElement(_OnePart2.default, { mode: 'show', index: i, part: part });
              })
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

  return PaperDetail;
}(_react.Component)) || _class;

var _default = PaperDetail;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PaperDetail, 'PaperDetail', 'src/container/manage/paper/PaperDetail.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/paper/PaperDetail.js');
  leaveModule(module);
})();

;