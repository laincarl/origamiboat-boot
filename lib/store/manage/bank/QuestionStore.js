'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor; /*
                                         * @Author: LainCarl 
                                         * @Date: 2018-03-28 17:27:18 
                                         * @Last Modified by: LainCarl
                                         * @Last Modified time: 2018-03-28 17:34:07
                                         * @Feature: 存放问题store 
                                         */

var _mobx = require('mobx');

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var QuestionStore = (_class = function () {
  function QuestionStore() {
    _classCallCheck(this, QuestionStore);

    _initDefineProp(this, 'questions', _descriptor, this);
  }

  _createClass(QuestionStore, [{
    key: 'setQuestions',
    value: function setQuestions(questions) {
      this.questions = questions;
    }
  }, {
    key: 'setQuestion',
    value: function setQuestion(value, index) {
      this.questions[index].title = value;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return QuestionStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'questions', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setQuestions', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setQuestions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setQuestion', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setQuestion'), _class.prototype)), _class);

var questionStore = new QuestionStore();
var _default = questionStore;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(QuestionStore, 'QuestionStore', 'src/store/manage/bank/QuestionStore.js');
  reactHotLoader.register(questionStore, 'questionStore', 'src/store/manage/bank/QuestionStore.js');
  reactHotLoader.register(_default, 'default', 'src/store/manage/bank/QuestionStore.js');
  leaveModule(module);
})();

;