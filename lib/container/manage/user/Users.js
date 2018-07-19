'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

require('antd/lib/icon/style');

require('antd/lib/message/style');

require('antd/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('Header');

var _Header2 = _interopRequireDefault(_Header);

var _Action = require('Action');

var _Action2 = _interopRequireDefault(_Action);

var _Axios = require('Axios');

var _Axios2 = _interopRequireDefault(_Axios);

var _EditUser = require('component/manage/EditUser');

var _EditUser2 = _interopRequireDefault(_EditUser);

var _AddUser = require('component/manage/AddUser');

var _AddUser2 = _interopRequireDefault(_AddUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var roles = {
  student: '学生',
  teacher: '教师',
  admin: '管理员'
};

var UserManage = function (_Component) {
  _inherits(UserManage, _Component);

  function UserManage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserManage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserManage.__proto__ || Object.getPrototypeOf(UserManage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      users: [],
      addVisible: false,
      editVisible: false,
      currentEditId: 0
    }, _this.getAllUser = function () {
      _this.setState({
        loading: true
      });
      _Axios2.default.get('/user/alluser').then(function (users) {
        _this.setState({
          users: users,
          loading: false
        });
      });
    }, _this.showAddModal = function () {
      _this.setState({
        addVisible: true
      });
    }, _this.hideAddModal = function () {
      _this.setState({
        addVisible: false
      });
    }, _this.showEditModal = function (id) {
      _this.setState({
        currentEditId: id,
        editVisible: true
      });
    }, _this.hideEditModal = function () {
      _this.setState({
        editVisible: false
      });
    }, _this.showConfirm = function (id) {
      confirm({
        title: '确认删除?',
        content: '删除后将不可恢复',
        okText: '确定',
        cancelText: '取消',
        onOk: function onOk() {
          _this.deleteUser(id);
        }
      });
    }, _this.deleteUser = function (id) {
      console.log(id);
      _Axios2.default.delete('/user/deluser?id=' + id).then(function (data) {
        _message3.default.success(data);
        _this.getAllUser();
      });
    }, _this.columns = [{
      title: '学工号',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '姓名',
      dataIndex: 'real_name',
      key: 'real_name'
    }, {
      title: '身份',
      dataIndex: 'role',
      key: 'role',
      render: function render(role) {
        return roles[role];
      }
    }, {
      title: '操作',
      key: 'action',
      render: function render(text, record) {
        return _react2.default.createElement(
          'div',
          {
            role: 'none',
            onClick: function onClick(e) {
              e.stopPropagation();
            }
          },
          _react2.default.createElement(_Action2.default, { data: [{
              action: function action() {
                _this.showEditModal(record.id);
              },
              text: '编辑'
            }, {
              action: function action() {
                _this.showConfirm(record.id);
              },
              text: '删除'
            }]
          })
        );
      }
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserManage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getAllUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          users = _state.users,
          addVisible = _state.addVisible,
          editVisible = _state.editVisible,
          currentEditId = _state.currentEditId;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          title: '\u7528\u6237\u7BA1\u7406',
          buttons: [{
            prefix: _react2.default.createElement(_icon2.default, { type: 'file-add' }),
            text: '添加用户',
            onClick: this.showAddModal
          }],
          refresh: this.getAllUser
        }),
        addVisible && _react2.default.createElement(_AddUser2.default, {
          reload: this.getAllUser,
          hideModal: this.hideAddModal
        }),
        editVisible && _react2.default.createElement(_EditUser2.default, {
          reload: this.getAllUser,
          currentEditId: currentEditId,
          hideModal: this.hideEditModal
        }),
        _react2.default.createElement(
          'div',
          { style: { padding: '20px' } },
          _react2.default.createElement(_table2.default, {
            pagination: { pageSize: 8 },
            rowKey: 'id',
            columns: this.columns,
            dataSource: users.map(function (one) {
              return _extends({}, one, { key: one.id });
            }),
            loading: loading
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

  return UserManage;
}(_react.Component);

var _default = UserManage;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(confirm, 'confirm', 'src/container/manage/user/Users.js');
  reactHotLoader.register(roles, 'roles', 'src/container/manage/user/Users.js');
  reactHotLoader.register(UserManage, 'UserManage', 'src/container/manage/user/Users.js');
  reactHotLoader.register(_default, 'default', 'src/container/manage/user/Users.js');
  leaveModule(module);
})();

;