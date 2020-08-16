import axios from 'axios';

// 加载动画计数器
let loading_count = 0;
// 添加动画计数的定时器
let timer = null;
// 需要显示加载动画的最小时间
const need_loading_time = 200;

// 判断当前app是否在线
const predicate_online = () => {
    try {
        return window.navigator.onLine;
    } catch (e) {
        // console.error(" current browser don't has onLine property!!! ");
        return 'unKnow';
    }
};

// 显示加载动画
const show_loading = () => {
    loading_count++;
    // 设定定时器的目的是为了防止请求时间比较短的情况下
    // 出现loading框一闪而过的情况,反而降低了用户体验
    if (!timer) {
        timer = setTimeout(() => {
            if (loading_count > 0) {
                console.log('gogogo');
            }
        }, need_loading_time);
    }
};

// 隐藏加载动画
const hide_loading = () => {
    loading_count--;
    if (loading_count === 0) {
        clearTimeout(timer);
        timer = null;
    }
};

// 对axios进行二次封装
// 设置默认URL
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.Authorization = window.localStorage.token || '';
axios.defaults.timeout = 20000;

// 设置请求拦截器
axios.interceptors.request.use(
    config => {
        // 判断当前是否连接着互联网
        if (!predicate_online()) {
            console.log('网络断开连接,请稍后重试');
            // 此处可以详细查看下cancelToken的一些可配置内容
            // 取消请求
            // config.cancelToken = new cancelToken();
        } else {
            show_loading();
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 设置相应拦截器
axios.interceptors.response.use(
    function (response) {
        let response_data = response.data || {};
        let success_code_list = [200, '200'];

        hide_loading();

        if ('code' in response_data) {
            // 请求的数据没异常
            if (success_code_list.indexOf(response_data.code) > -1) {
                return response_data;
            } else if ([1000, 2000].indexOf(response_data.code) > -1) {
                window.localStorage.token = '';
                // router.replace('/login');
                return Promise.reject(response_data.msg);
            } else {
                return Promise.reject(response_data.msg);
            }
        } else {
            return response_data;
        }
    },
    error => {
        hide_loading();
        return Promise.reject(error);
    }
);

// 封装Get与Post请求
const httpGet = (url, params = {}) => {
    axios.defaults.headers.Authorization = window.localStorage.token || '';
    return axios.get(url, {params});
};

const httpPost = (url, data = {}) => {
    axios.defaults.headers.Authorization = window.localStorage.token || '';
    return axios.post(url, data);
};

export {httpGet, httpPost};
