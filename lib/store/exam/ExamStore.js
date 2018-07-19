'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2; /*
                                                       * @Author: LainCarl 
                                                       * @Date: 2018-03-05 20:34:01 
                                                       * @Last Modified by: LainCarl
                                                       * @Last Modified time: 2018-04-03 17:35:18
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

var ExamStore = (_class = function () {
  function ExamStore() {
    _classCallCheck(this, ExamStore);

    _initDefineProp(this, 'currentExam', _descriptor, this);

    _initDefineProp(this, 'answers', _descriptor2, this);
  }

  _createClass(ExamStore, [{
    key: 'setAnswer',
    value: function setAnswer(id, part, index, answer) {
      this.answers[id] = answer;
    }
    // @action
    // setanswers(answers) {
    //   this.answers = answers;
    // }

  }, {
    key: 'setCurrentExam',
    value: function setCurrentExam(currentExam) {
      this.currentExam = currentExam;
      var answers = {};
      currentExam.parts.forEach(function (part) {
        part.questions.forEach(function (question) {
          answers[question.id] = null;
        });
      });
      this.answers = answers;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ExamStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'currentExam', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return { id: null, title: null, parts: [] };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'answers', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setAnswer', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setAnswer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setCurrentExam', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setCurrentExam'), _class.prototype)), _class);

var examStore = new ExamStore();
var _default = examStore;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExamStore, 'ExamStore', 'src/store/exam/ExamStore.js');
  reactHotLoader.register(examStore, 'examStore', 'src/store/exam/ExamStore.js');
  reactHotLoader.register(_default, 'default', 'src/store/exam/ExamStore.js');
  leaveModule(module);
})();

;