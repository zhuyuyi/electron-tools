/**
 * 其他规则可自行添加，规则详情如下
 * es6规则详情地址：https://eslint.org/docs/rules/
 * react规则详情地址：https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 * */
module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended'], //默认用推荐配置
    env: {
        browser: true,
        es6: true,
        node: false,
        commonjs: true,
        jquery: true,
    },
    globals: {
        process: false, //一些全局变量，按照自己项目设置
        __dirname: false,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            arrowFunctions: true,
            classes: true,
            modules: true,
            defaultParams: true,
        },
        sourceType: 'module',
    },
    plugins: ['react','prettier'],
    rules: {
        "prettier/prettier": "error",
        'no-multiple-empty-lines': [2, {max: 2, maxEOF: 3, maxBOF: 3}],
        'no-irregular-whitespace': [
            2,
            {skipStrings: true, skipComments: true, skipTemplates: true},
        ],
        'react/prefer-es6-class': 2,
        'no-multi-spaces': 2,
        'no-unused-vars': 2,
        'no-redeclare': 2,
        'no-console': 1,
        'no-var': 2,
        indent: 0,
        'no-unreachable': 2,
        //关闭专门的react规则
        'react/no-find-dom-node': 0, //有时候还是要用findDOMNode的
        'react/no-did-mount-set-state': 0, //有时候还是要在didMount里用setState
        'react/no-did-update-set-state': 0, //有条件控制的话也是能用的
        'react/no-string-refs': 0, //refs这个东西有时候也是需要的
        'react/prop-types': 0, //这个以后可以规范下
    },
    // "settings": {
    //     "react": {
    //       "createClass": "createReactClass", // Regex for Component Factory to use,
    //                                          // default to "createReactClass"
    //       "pragma": "React",  // Pragma to use, default to "React"
    //       "version": "detect", // React version. "detect" automatically picks the version you have installed.
    //                            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
    //                            // default to latest and warns if missing
    //                            // It will default to "detect" in the future
    //       "flowVersion": "0.53" // Flow version
    //     },
    //     "propWrapperFunctions": [
    //         // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
    //         "forbidExtraProps",
    //         {"property": "freeze", "object": "Object"},
    //         {"property": "myFavoriteWrapper"}
    //     ],
    //     "linkComponents": [
    //       // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    //       "Hyperlink",
    //       {"name": "Link", "linkAttribute": "to"}
    //     ]
    // }
};
