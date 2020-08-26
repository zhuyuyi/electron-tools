import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card, Input} from 'antd';
import LayoutHeader from '@/components/LayoutHeader';
import EchartsModal from '@/components/EchartsModal';
import echartsModalPlugin from '@/components/EchartsModal/echartsModalPlugin';
import {options, content} from './plugins'; // 编辑器
import styles from './index.less';

class TinyMceEditor extends Component {
    state = {
        visible: false, // 弹框显示隐藏
    };

    componentDidMount() {
        echartsModalPlugin(this);
        window.tinymce.init(options);
    }

    componentWillUnmount() {
        window.tinyMCE.editors['textarea'].destroy();
    }

    // echartsModal
    handleModal = isshow => {
        this.setState({
            visible: isshow,
        });
    };

    // 获取所有的内容
    getEditorContent = () => {
        const cnt = window.tinyMCE.editors['textarea'].getContent(); // textarea 为设置的id值
        console.log(cnt);
    };

    render() {
        const {visible} = this.state;

        return (
            <LayoutHeader title="编辑器" subTitle="这是编辑器页">
                <Card title="tinymce编辑器">
                    <div className={styles.submitBox}>
                        <Input addonBefore="标题" defaultValue="" placeholder="请输入文章标题" />
                        <Button onClick={this.getEditorContent} type="primary">
                            发布
                        </Button>
                    </div>
                    <textarea id="textarea" defaultValue={content}></textarea>
                </Card>

                {visible && <EchartsModal visible={visible} handleModal={this.handleModal} />}
            </LayoutHeader>
        );
    }
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
