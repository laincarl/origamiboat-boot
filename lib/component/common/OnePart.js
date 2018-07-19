'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Constants = require('Constants');

var _question = require('./question');

var _OneQuestionBlock = require('../exam/OneQuestionBlock');

var _OneQuestionBlock2 = _interopRequireDefault(_OneQuestionBlock);

var _NumberToChinese = require('../../util/NumberToChinese');

var _NumberToChinese2 = _interopRequireDefault(_NumberToChinese);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-04-02 16:46:26 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-04-03 17:08:18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 一个大题  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import SelectQuestion from '../exam/SelectQuestion';
// import QuestionShow from './QuestionShow';
// import ResultShow from '../exam/ResultShow';


var OnePart = function (_Component) {
  _inherits(OnePart, _Component);

  function OnePart() {
    _classCallCheck(this, OnePart);

    return _possibleConstructorReturn(this, (OnePart.__proto__ || Object.getPrototypeOf(OnePart)).apply(this, arguments));
  }

  _createClass(OnePart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          part = _props.part,
          index = _props.index,
          mode = _props.mode;

      console.log(mode);
      var type = part.type,
          questions = part.questions,
          score = part.score,
          num = part.num;

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
      var show = null;
      if (mode === 'side') {
        show = questions.map(function (question, i) {
          return _react2.default.createElement(_OneQuestionBlock2.default, { id: question.id, num: i + 1 });
        });
      } else {
        show = questions.map(function (question, i) {
          return _react2.default.createElement(Question, {
            key: Math.random(),
            mode: mode,
            part: index,
            index: i,
            num: i + 1,
            data: question
          });
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        mode === 'side' ? (0, _NumberToChinese2.default)(index + 1) + '\u3001' + _Constants.questionType[type] : (0, _NumberToChinese2.default)(index + 1) + '\u3001' + _Constants.questionType[type] + '\uFF08\u672C\u5927\u9898\u5171' + num + '\u5C0F\u9898\uFF0C\u6BCF\u9898' + score + '\u5206\uFF0C\u5171' + num * score + '\u5206\uFF09',
        _react2.default.createElement(
          'div',
          { style: {
              display: mode === 'side' && 'flex',
              flexWrap: 'wrap',
              alignContent: 'flex-start'
            }
          },
          show
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

  return OnePart;
}(_react.Component);

var _default = OnePart;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OnePart, 'OnePart', 'src/component/common/OnePart.js');
  reactHotLoader.register(_default, 'default', 'src/component/common/OnePart.js');
  leaveModule(module);
})();

;