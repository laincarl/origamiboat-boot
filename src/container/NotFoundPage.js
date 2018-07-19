/*
 * @Author: LainCarl 
 * @Date: 2018-03-05 20:35:08 
 * @Last Modified by: LainCarl
 * @Last Modified time: 2018-04-05 16:07:01
 */

import React, { Component } from 'react';
import AppState from 'AppState';
import { Button } from 'antd';

class NotFoundPage extends Component {
  render() {
    return (
      <div
        style={{
          height: 420,
          width: 700,
          margin: '100px auto',
          background: '#228c80',
          borderRadius: 30,
          border: '20px solid #ddb06e',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            color: 'white',
            marginTop: 90,
            fontSize: 30,
          }}
        >
          404<br />
          页面不翼而飞了
        </div>
        <Button
          onClick={() => { AppState.history.goBack(); }}
          style={{
            marginTop: 60,
            background: '#bb8c3e',
            height: 50,
            width: 150,
            fontSize: 20,
            color: 'white',
            border: 'none',
          }}
        >返回
        </Button>
      </div>
    );
  }
}


export default NotFoundPage;
