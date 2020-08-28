import React, {useState, Fragment, useEffect} from 'react';
import styles from './index.less';
import {Tabs} from 'antd';
import CodeMirrorEditor from './../CodeMirrorEditor';
import EchartsForm from './../EchartsForm';
import EchartsView from './../EchartsView';
import ChooseList from './ChooseList';
import {options} from './../CodeMirrorEditor/options';
import {handleOk} from '@/components/EchartsModal/echartsModalPlugin';

const {TabPane} = Tabs;

function EchartsChoose(props) {
    const {handleModal} = props;

    const [detailsVisible, handleDetailsVisible] = useState(false); // 是否进入详细页
    const [tabKey, changeTabKey] = useState('1'); // tab key
    const [json, setJson] = useState(''); // json值
    // const [base64, setBase64] = useState(''); // 图片地址
    const [values, setValues] = useState({
        isShowY: '1',
        isShowX: '1',
        width: 30,
    }); // 配置项

    useEffect(() => {
        setJson(options);
    }, []);

    // 绘制成一张图片返回base64
    // const setImage = canvas => {
    //     let base64 = canvas.getDataURL('image/png');
    //     setBase64(base64);
    // };

    // 配置项
    const onFinish = _values => {
        setValues(_values);
        console.log(values);
    };

    // 设置值，同步两侧代码
    const setEchartsValue = json => {
        setJson(json);
    };

    // tabs change
    const tabsChange = key => {
        changeTabKey(key);
    };

    // goDetails
    const goDetails = item => {
        handleDetailsVisible(true);
        setJson(item.options);
    };

    // submit
    const renderCanvas = () => {
        handleOk(json);
        handleModal(false);
    };

    return (
        <div className={styles.ulContainer}>
            {detailsVisible ? (
                <Fragment>
                    <Tabs
                        className={styles.tabContainer}
                        onChange={tabsChange}
                        tabPosition="left"
                        accessKey={tabKey}
                    >
                        <TabPane tab="基础配置" key="1">
                            <EchartsForm
                                handleDetailsVisible={handleDetailsVisible}
                                setEchartsValue={setEchartsValue}
                                onFinish={onFinish}
                                values={values}
                                renderCanvas={renderCanvas}
                            />
                        </TabPane>
                        <TabPane tab="源代码" key="2">
                            {tabKey === '2' && (
                                <CodeMirrorEditor
                                    handleDetailsVisible={handleDetailsVisible}
                                    setEchartsValue={setEchartsValue}
                                    json={json}
                                    renderCanvas={renderCanvas}
                                />
                            )}
                        </TabPane>
                    </Tabs>
                    <EchartsView json={json} />
                </Fragment>
            ) : (
                <ChooseList handleDetailsVisible={handleDetailsVisible} goDetails={goDetails} />
            )}
        </div>
    );
}
export default EchartsChoose;
