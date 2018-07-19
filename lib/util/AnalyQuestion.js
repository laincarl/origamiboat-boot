'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnalyQuestion;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/*
 * @Author: LainCarl 
 * @Date: 2018-04-17 14:49:45 
 * @Last Modified by: LainCarl
 * @Last Modified time: 2018-04-25 12:32:47
 * @Feature: 试题分析函数，包括单选，多选，判断，填空 
 */

var Regs = {
  select_single: {
    // 试题格式示例 数字加顿号开头，选项大写，正确答案前面星号
    // 1、下面哪个是属性而不是标记（  ）。
    // A、IMG    B、FORM     *C、 HREF   D、TD
    // 将问题分割成单个问题
    question: /[0-9]+、([^]*?)(?=[0-9]+、|$)/g,
    // 从单个问题找题目
    title: /[0-9]+、([^]*?)\*?[A-Z]+、/g,
    // 找到选项
    selects: /([A-Z])+、([^]*?)(?=\*?[A-Z]+、|$)/g,
    // 找到答案
    answers: /\*([A-Z])+、/g
  },
  select_multi: {
    // 试题格式示例 数字加顿号开头，选项大写，正确答案前面星号
    // 1、下面哪个是属性而不是标记（  ）。
    // A、IMG    *B、FORM     *C、 HREF   D、TD
    // 将问题分割成单个问题
    question: /[0-9]+、([^]*?)(?=[0-9]+、|$)/g,
    // 从单个问题找题目
    title: /[0-9]+、([^]*?)\*?[A-Z]+、/g,
    // 找到选项
    selects: /([A-Z])+、([^]*?)(?=\*?[A-Z]+、|$)/g,
    // 找到答案
    answers: /\*([A-Z])+、/g
  },
  blank: {
    // 试题格式示例 数字加顿号开头，选项大写，正确答案前面星号
    // 1、下面哪个是属性而不是标记（  ）。
    // A、IMG    B、FORM     *C、 HREF   D、TD
    // 将问题分割成单个问题
    question: /[0-9]+、([^]*?)(?=[0-9]+、|$)/g,
    // 从单个问题找题目
    title: /\{[^]*?\}/g,
    // 找到选项
    selects: /([A-Z])+、([^]*?)(?=\*?[A-Z]+、|$)/g,
    // 找到答案
    answers: /\{([^]*?)\}/g
  }
};
/**
 * 
 * 
 * @param {Object} question 
 * @param {String} type 
 * @returns 
 */
function checkQuestion(question, type) {
  switch (type) {
    case 'select_single':
      if (question.title && Object.keys(question.selects).length > 1 && question.answers.length === 1) {
        return true;
      } else {
        return false;
      }
    case 'select_multi':
      if (question.title && Object.keys(question.selects).length > 1 && question.answers.length > 1) {
        return true;
      } else {
        return false;
      }
    case 'blank':
      if (question.title && question.answers.length > 0) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}
/**
 * 
 * 
 * @export
 * @param {Object} origin 初始数据
 * @param {Number} bank_id 题库id
 * @param {String} type 题型
 * @returns 
 */
function AnalyQuestion(origin, bank_id, type) {
  return new Promise(function (resolve, reject) {
    // 当传过来的试题类型不存在，返回空数组
    var Reg = Regs[type];
    if (!Reg) {
      resolve([]);
    }
    // 以下开始匹配问题以及答案

    // 将问题分割成单个问题
    var questionReg = Reg.question;
    // 从单个问题找题目
    var titleReg = Reg.title;
    // 找到选项
    var selectsReg = Reg.selects;
    // 找到答案
    var answersReg = Reg.answers;
    var result = void 0;
    var questions = [];

    while (result = questionReg.exec(origin)) {
      // console.log(result[1], regex2.lastIndex);
      // console.log(result);
      var question = {
        type: type,
        bank_id: bank_id,
        title: null,
        answers: [],
        selects: {}
      };
      var answer = void 0;
      while (answer = answersReg.exec(result[0])) {
        // console.log(answer, regex2.lastIndex);
        // console.log(answer[1].trim());
        question.answers.push(answer[1].trim());
      }
      var select = void 0;
      while (select = selectsReg.exec(result[0])) {
        // console.log(answer, regex2.lastIndex);
        // console.log(select[1].trim());
        question.selects[select[1].trim()] = select[2].trim();
      }
      var title = void 0;
      if (type === 'blank') {
        title = result[0].replace(/[0-9]+、/g, '').replace(titleReg, '{}');
        // console.log(answer, regex2.lastIndex);
        // console.log('title', title);
        question.title = title;
      } else {
        while (title = titleReg.exec(result[0])) {
          // console.log(answer, regex2.lastIndex);
          // console.log('title', title);
          question.title = title[1].trim();
        }
      }

      // 单个试题解析完成后开始判断
      if (!checkQuestion(question, type)) {
        console.log(question);
        reject(new Error('\u90E8\u5206\u8BD5\u9898\u89E3\u6790\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u683C\u5F0F\uFF0C' + result[0]));
      } else {
        console.log(question);
        questions.push(question);
      }
    }
    // 解析完成后开始判断
    // console.log(questions);
    resolve(questions);
  });
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Regs, 'Regs', 'src/util/AnalyQuestion.js');
  reactHotLoader.register(checkQuestion, 'checkQuestion', 'src/util/AnalyQuestion.js');
  reactHotLoader.register(AnalyQuestion, 'AnalyQuestion', 'src/util/AnalyQuestion.js');
  leaveModule(module);
})();

;