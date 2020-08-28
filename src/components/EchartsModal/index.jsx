import React from 'react';
import {Modal} from 'antd';
import EchartsChoose from './EchartsChoose';
import styles from './index.less';

function EchartsModal(props) {
    const {handleModal, visible} = props;

    return (
        <Modal
            title="图表"
            visible={visible}
            onOk={() => {
                handleModal(false);
            }}
            onCancel={() => {
                handleModal(false);
            }}
            maskClosable={false}
            zIndex={10000}
            width={window.innerWidth - 60}
            getContainer={false}
            className={styles.echartsModal}
            centered={true}
            footer={null}
        >
            <div className={styles.modalBox}>
                <EchartsChoose handleModal={handleModal} />
            </div>
        </Modal>
    );
}

export default EchartsModal;
