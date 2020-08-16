import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN'; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';

const store = createStore(reducer);

const Dom = (
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
);

ReactDom.render(Dom, document.getElementById('app'));
