import React, {Component} from 'react';
import {Modal} from 'antd';

class EchartsModal extends Component {
    handleOk = () => {};

    render() {
        const {visible, handleModal} = this.props;

        return (
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={this.handleOk}
                onCancel={() => {
                    handleModal(false);
                }}
                maskClosable={false}
                zIndex={10000}
                width={window.innerWidth - 100}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        );
    }
}

export default EchartsModal;
