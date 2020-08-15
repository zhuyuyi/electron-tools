import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

import HomePage from './pages/HomePage';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const store = createStore(reducer);

const Dom = (
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <HomePage />
        </Provider>
    </ConfigProvider>
)

ReactDom.render(Dom,document.getElementById('app'))