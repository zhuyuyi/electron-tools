import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card, Input} from 'antd';
import LayoutHeader from '@/components/LayoutHeader';
import EchartsModal from '@/components/EchartsModal';
import {initCharts} from '@/components/EchartsModal/echartsModalPlugin';
import {options} from './plugins'; // 编辑器
import styles from './index.less';
import {httpGet, httpPost} from '@/utils/http';

function TinyMceEditor() {
    const [visible, handleVisible] = useState(false); // 弹框显示隐藏
    const [inputValue, setInputValue] = useState(''); // 输入框值
    const [content, setContent] = useState(''); // 值
    const [_id, setId] = useState(''); // id

    useEffect(() => {
        initCharts(handleVisible);
        window.tinymce.init(options);

        return () => {
            window.tinyMCE.editors['textarea'].destroy(); // 组件销毁时执行
        };
    }, []);

    useEffect(() => {
        httpGet('/api/article').then(returns => {
            setContent(returns.texts);
            setInputValue(returns.title);
            setId(returns._id);
        });
    }, [_id]);

    // echartsModal
    const handleModal = isshow => {
        handleVisible(isshow);
    };

    // 获取所有的内容
    const getEditorContent = async () => {
        const cnt = window.tinyMCE.editors['textarea'].getContent(); // textarea 为设置的id值
        console.log(cnt);

        await httpPost('/api/setArticle', {
            title: inputValue,
            texts: cnt,
            id: _id,
        });
    };

    // 文章标题变化
    const titleChange = e => {
        let value = e.target.value;
        setInputValue(value);
    };

    return (
        <LayoutHeader title="编辑器" subTitle="这是编辑器页">
            <Card title="tinymce编辑器">
                <div className={styles.submitBox}>
                    <Input
                        addonBefore="标题"
                        value={inputValue}
                        onChange={titleChange}
                        placeholder="请输入文章标题"
                    />
                    <Button onClick={getEditorContent} type="primary">
                        发布
                    </Button>
                </div>
                <textarea id="textarea" defaultValue={content}></textarea>
            </Card>

            {visible && <EchartsModal visible={visible} handleModal={handleModal} />}
        </LayoutHeader>
    );
}

function mapStateToProps(state) {
    return {
        state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TinyMceEditor);
