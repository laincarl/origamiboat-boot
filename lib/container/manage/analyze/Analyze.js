'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _core = require('echarts-for-react/lib/core');

var _core2 = _interopRequireDefault(_core);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/lib/chart/line');

require('echarts/lib/chart/bar');

require('echarts/lib/component/title');

require('echarts/lib/component/tooltip');

require('echarts/lib/component/grid');

require('echarts/lib/component/legend');

require('echarts/lib/component/dataZoom');

require('echarts/lib/component/visualMap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: LainCarl 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-04-02 21:54:40 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: LainCarl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-05-19 16:48:30
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Feature: 数据统计图 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import ReactEcharts from 'echarts-for-react';

// import the core library.


// then import echarts modules those you have used manually.

// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';


// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';


// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

var Analyze = function (_Component) {
  _inherits(Analyze, _Component);

  function Analyze(props) {
    _classCallCheck(this, Analyze);

    var _this = _possibleConstructorReturn(this, (Analyze.__proto__ || Object.getPrototypeOf(Analyze)).call(this, props));

    _this.getInitialState = function () {
      return { option: _this.getOption() };
    };

    _this.getOption = function () {
      return {
        title: {
          text: 'Hello Echarts-for-react-'
        },
        tooltip: {
          trigger: 'axis'

        },
        legend: {
          data: ['最新成交价', '预购队列']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          top: 60,
          left: 30,
          right: 60,
          bottom: 30
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        visualMap: {
          show: false,
          min: 0,
          max: 1000,
          color: ['#BE002F', '#F20C00', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500', '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22', '#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0']
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          data: function () {
            var now = new Date();
            var res = [];
            var len = 50;
            while (len -= 1) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
              now = new Date(now - 2000);
            }
            return res;
          }()
        }, {
          type: 'category',
          boundaryGap: true,
          data: function () {
            var res = [];
            var len = 50;
            while (len -= 1) {
              res.push(50 - len + 1);
            }
            return res;
          }()
        }],
        yAxis: [{
          type: 'value',
          scale: true,
          name: '价格',
          max: 20,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }, {
          type: 'value',
          scale: true,
          name: '预购量',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }],
        series: [{
          name: '预购队列',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              barBorderRadius: 4
            }
          },
          animationEasing: 'elasticOut',
          animationDelay: function animationDelay(idx) {
            return idx * 10;
          },
          animationDelayUpdate: function animationDelayUpdate(idx) {
            return idx * 10;
          },

          data: function () {
            var res = [];
            var len = 50;
            while (len -= 1) {
              res.push({ name: 'ss', value: Math.round(Math.random() * 1000) });
            }
            return res;
          }()
        }, {
          name: '最新成交价',
          type: 'line',
          data: function () {
            var res = [];
            var len = 0;
            while (len < 50) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0);
              len += 1;
            }
            return res;
          }()
        }]
      };
    };

    _this.fetchNewDate = function () {
      var axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
      var option = _this.state.option;

      option.title.text = 'Hello Echarts-for-react.' + new Date().getSeconds();
      var data0 = option.series[0].data;
      var data1 = option.series[1].data;
      data0.shift();
      data0.push(Math.round(Math.random() * 1000));
      data1.shift();
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      option.xAxis[0].data.shift();
      option.xAxis[0].data.push(axisData);
      option.xAxis[1].data.shift();
      option.xAxis[1].data.push(_this.count += 1);
      _this.setState({ option: option });
    };

    _this.timeTicket = null;
    _this.count = 51;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(Analyze, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.timeTicket) {}
      // clearInterval(this.timeTicket);

      // this.timeTicket = setInterval(this.fetchNewDate, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeTicket) {
        // clearInterval(this.timeTicket);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'examples' },
        _react2.default.createElement(_Header2.default, {
          hasBack: true,
          title: '\u7EDF\u8BA1\u4FE1\u606F'
        }),
        _react2.default.createElement(
          'div',
          { className: 'parent' },
          _react2.default.createElement(_core2.default, {
            echarts: _echarts2.default,
            option: this.state.option,
            style: { height: 400 }
          })
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

  return Analyze;
}(_react.Component);

exports.default = Analyze;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Analyze, 'Analyze', 'src/container/manage/analyze/Analyze.js');
  leaveModule(module);
})();

;