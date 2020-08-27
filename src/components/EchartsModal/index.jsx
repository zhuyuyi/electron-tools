import React, {Component} from 'react';
import {Modal, Tabs} from 'antd';
import CodeMirrorEditor from './CodeMirrorEditor';
import EchartsForm from './EchartsForm';
import EchartsView from './EchartsView';
import {options} from './CodeMirrorEditor/options';
import styles from './index.less';

const {TabPane} = Tabs;

class EchartsModal extends Component {
    state = {
        tabKey: '1', // tab key
        json: '', // json值
        base64: '', // 图片地址
        values: {}, // 配置项
    };

    componentDidMount() {
        this.setState({
            json: options,
        });
    }

    // 配置项
    onFinish = values => {
        this.setState({
            values,
        });
    };

    // 设置值，同步两侧代码
    setEchartsValue = json => {
        this.setState({
            json,
        });
    };

    // 绘制成一张图片返回base64
    setImage = canvas => {
        let base64 = canvas.getDataURL('image/png');
        this.setState({
            base64,
        });
    };

    // tabs change
    tabsChange = key => {
        this.setState({
            tabKey: key,
        });
    };

    // 提交
    handleOk = () => {
        const {handleModal} = this.props;
        const {json} = this.state;

        const _div = document.createElement('div'); // 空壳div
        let _id = `canvas_${new Date().getTime()}`; // 获取每个id

        const canvasBox = `<div id=${_id} style="width:400px;height:400px"></div>`;
        let _document = window.tinymce.activeEditor.iframeElement.contentDocument;
        const script = `<script>${(function () {
            setTimeout(() => {
                const myChart = window.echarts.init(_document.getElementById(_id), null, {
                    renderer: 'canvas',
                });
                myChart.clear();
                let options;
                if (json) {
                    options = eval('(' + json + ')');
                }
                myChart.setOption(options);
            }, 500);
            return '111111'; // 这里需要重写 为了让重渲染时也触发相应
        })()}</script>`;

        _div.innerHTML = canvasBox + script;

        let render = '<div contenteditable="false">' + _div.innerHTML + '</div>';

        window.tinymce.activeEditor.insertContent(render);

        handleModal(false);
    };

    render() {
        const {visible, handleModal} = this.props;
        const {json, base64, tabKey} = this.state;

        return (
            <Modal
                title="图表选择"
                visible={visible}
                onOk={this.handleOk}
                onCancel={() => {
                    handleModal(false);
                }}
                maskClosable={false}
                zIndex={10000}
                width={window.innerWidth - 100}
                getContainer={false}
                className={styles.echartsModal}
                centered={true}
            >
                <div className={styles.modalBox}>
                    <Tabs
                        className={styles.tabContainer}
                        onChange={this.tabsChange}
                        tabPosition="left"
                        accessKey={tabKey}
                    >
                        <TabPane tab="基础配置" key="1">
                            <EchartsForm
                                setEchartsValue={this.setEchartsValue}
                                onFinish={this.onFinish}
                            />
                        </TabPane>
                        <TabPane tab="源代码" key="2">
                            {tabKey === '2' && (
                                <CodeMirrorEditor
                                    setEchartsValue={this.setEchartsValue}
                                    json={json}
                                />
                            )}
                        </TabPane>
                        <TabPane tab="图表选择" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    <EchartsView json={json} base64={base64} />
                </div>
            </Modal>
        );
    }
}

export default EchartsModal;
