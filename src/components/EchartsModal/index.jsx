import React, {Component} from 'react';
import {Modal} from 'antd';
import CodeMirrorEditor from './CodeMirrorEditor';
import EchartsView from './EchartsView';
import {options} from './CodeMirrorEditor/options';
import styles from './index.less';

class EchartsModal extends Component {
    state = {
        json: '', // json值
        base64: '', //
    };

    componentDidMount() {
        this.setState({
            json: options,
        });
    }

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
                console.log(111111);
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
        const {json, base64} = this.state;

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
                    <CodeMirrorEditor setEchartsValue={this.setEchartsValue} json={json} />
                    <EchartsView json={json} base64={base64} />
                </div>
            </Modal>
        );
    }
}

export default EchartsModal;
