import React, {Component} from 'react';
import jsBeautify from 'js-beautify/js/lib/beautify';
import {Button} from 'antd';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

import styles from './index.less';

class CodeMirrorEditor extends Component {
    state = {
        codeEditor: {}, // ace编辑器
        value: '', // 编辑器值
    };

    componentDidMount() {
        this.initAceEditor();
    }

    componentDidUpdate(preProps) {
        const {json} = this.props;
        if (preProps.json !== json) {
            this.initAceEditor();
        }
    }

    // 初始化左侧ace编辑器
    initAceEditor = () => {
        const {json} = this.props;

        let codeEditor = ace.edit('codeEditor');
        codeEditor.getSession().setMode('ace/mode/javascript'); // 语言
        codeEditor.setTheme('ace/theme/monokai'); // 主题
        codeEditor.setOption('tabSize', 4); // tab 缩进
        codeEditor.setOption('fontSize', 15); // 字体
        codeEditor.getSession().setUseWorker(false);
        codeEditor.$blockScrolling = Infinity; // 去除scroll警报
        let value = jsBeautify.js_beautify(json, {indent_size: 4}); // 缩进
        codeEditor.setValue(value); // 设置初始值
        codeEditor.clearSelection(); // 取消全选
        this.setState(
            {
                codeEditor,
                value,
            },
            () => {
                codeEditor.on('change', this.onChange);
            }
        );
    };

    // aceEditor change
    onChange = () => {
        const {codeEditor} = this.state;
        this.setState({
            value: codeEditor.getValue(),
        });
    };

    render() {
        const {setEchartsValue} = this.props;
        const {value} = this.state;

        return (
            <div className={styles.aceEditorBox}>
                <Button
                    onClick={() => {
                        setEchartsValue(value);
                    }}
                    type="primary"
                >
                    运行
                </Button>
                <div id="codeEditor"></div>
            </div>
        );
    }
}

export default CodeMirrorEditor;
