import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN'; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import App from './App';
// import {BrowserRouter} from 'react-router-dom';

import * as moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// import 'antd/dist/antd.css';
// import './public/css/index.css';

// const store = createStore(reducer, applyMiddleware(thunk));

// const Dom = (
//     <ConfigProvider locale={zhCN}>
//         {/* <BrowserRouter> */}
//             <App />
//         {/* </BrowserRouter> */}
//     </ConfigProvider>
// );

ReactDom.render(<App />, document.getElementById('app'));
