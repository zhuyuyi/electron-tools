import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN'; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './public/css/index.css';

const store = createStore(reducer, applyMiddleware(thunk));

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
