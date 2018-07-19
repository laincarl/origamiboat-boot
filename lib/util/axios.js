'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

require('antd/lib/message/style');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var accessTokens = _jsCookie2.default.get('token');
// axios 配置
_axios2.default.defaults.timeout = 10000;
_axios2.default.defaults.baseURL = _config2.default.server;
// history.go(0);
// axios.defaults.validateStatus = (status) => {
//   console.log(status);
//   console.log(status >= 200 && status < 300);
//   return status >= 200 && status < 300;
// };
// http request 拦截器);
_axios2.default.interceptors.request.use(function (config) {
  var newConfig = config;
  newConfig.headers['Content-Type'] = 'application/json';
  newConfig.headers.Accept = 'application/json';
  newConfig.headers.Authorization = '' + accessTokens;
  return newConfig;
}, function (err) {
  var error = err;
  return Promise.reject(error);
});
// http response 拦截器
_axios2.default.interceptors.response.use(function (response) {
  if (response.status === 204) {
    return Promise.resolve(response);
  }
  // continue sending response to the then() method
  // console.log(response);
  var _response$data = response.data,
      data = _response$data.data,
      status = _response$data.status,
      type = _response$data.type;

  var Message = response.data.message;
  if (status !== undefined && status === 0) {
    _message3.default.error(type + ' : ' + Message);
    return Promise.reject(response.data);
  } else if (status !== undefined && status === 1) {
    console.log('true');
    return Promise.resolve(data);
  } else {
    return Promise.resolve(response.data);
  }
}, function (error) {
  console.log(error.response);
  var response = error.response;

  if (response) {
    var status = response.status;

    switch (status) {
      // case 403: {
      //   message.error('权限不足');
      //   break;
      // }
      case 500:
        {
          _message3.default.error('服务器内部错误');
          break;
        }
      case 504:
        {
          _message3.default.error('服务器内部错误');
          break;
        }
      default:
        break;
    }
  }
  // request is rejected and will direct logic to the catch() method
  return Promise.reject(error);
});
var _default = _axios2.default;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(accessTokens, 'accessTokens', 'src/util/axios.js');
  reactHotLoader.register(_default, 'default', 'src/util/axios.js');
  leaveModule(module);
})();

;