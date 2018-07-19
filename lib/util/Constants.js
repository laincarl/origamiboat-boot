'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var questionType = exports.questionType = {
  select_single: '单选题',
  select_multi: '多选题',
  blank: '填空题'
};
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(questionType, 'questionType', 'src/util/Constants.js');
  leaveModule(module);
})();

;