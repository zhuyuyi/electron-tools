import React, {useState, useEffect} from 'react';
import jsBeautify from 'js-beautify/js/lib/beautify';
import ace from 'brace';
import SubmitEcharts from './../SubmitEcharts';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

import styles from './index.less';

function CodeMirrorEditor(props) {
    const {json, setEchartsValue, handleDetailsVisible, renderCanvas} = props;
    const [value, setValue] = useState(''); // 编辑器值
    const [codeEditor, setCodeEditor] = useState(null); // ace编辑器

    useEffect(() => {
        initAceEditor();
    }, []);

    // 初始化左侧ace编辑器
    const initAceEditor = () => {
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

        setCodeEditor(codeEditor);
        setValue(value);
    };

    // aceEditor change
    const onChange = () => {
        setValue(codeEditor.getValue());
    };

    useEffect(() => {
        if (codeEditor) {
            codeEditor.on('change', onChange);
        }
    }, [codeEditor]);

    return (
        <div className={styles.aceEditorBox}>
            <SubmitEcharts
                handleDetailsVisible={handleDetailsVisible}
                renderCanvas={renderCanvas}
                handleSubmit={() => {
                    setEchartsValue(value);
                }}
            />
            <div id="codeEditor"></div>
        </div>
    );
}

export default CodeMirrorEditor;
