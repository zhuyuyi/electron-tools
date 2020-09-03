import React from 'react';
import {Button} from 'antd';
import styles from './index.less';

function SubmitEcharts(props) {
    const {handleSubmit, renderCanvas, handleDetailsVisible, form, setValues} = props;

    return (
        <div className={styles.btnBox}>
            <Button
                onClick={() => {
                    handleDetailsVisible(false);
                }}
                className={styles.marginRight}
            >
                返回
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    handleSubmit(form, setValues);
                }}
                className={styles.marginRight}
            >
                运行
            </Button>
            <Button type="primary" onClick={renderCanvas}>
                插入图表
            </Button>
        </div>
    );
}

export default SubmitEcharts;
