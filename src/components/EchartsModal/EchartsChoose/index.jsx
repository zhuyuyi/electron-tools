import React, {useState, Fragment} from 'react';
import styles from './index.less';
import {Tabs} from 'antd';
import CodeMirrorEditor from './../CodeMirrorEditor';
import EchartsForm from './../EchartsForm';
import EchartsView from './../EchartsView';
import ChooseList from './ChooseList';
import {handleOk} from '@/components/EchartsModal/echartsModalPlugin';

const {TabPane} = Tabs;

function EchartsChoose(props) {
    const {handleModal} = props;
    const [detailsVisible, handleDetailsVisible] = useState(false); // 是否进入详细页
    const [tabKey, changeTabKey] = useState('1'); // tab key
    const [json, setJson] = useState(''); // json值
    const [id, setId] = useState(''); // 选中的id
    // const [base64, setBase64] = useState(''); // 图片地址

    // 绘制成一张图片返回base64
    // const setImage = canvas => {
    //     let base64 = canvas.getDataURL('image/png');
    //     setBase64(base64);
    // };

    // 设置值，同步两侧代码
    const setEchartsValue = json => {
        setJson(json);
    };

    // tabs change
    const tabsChange = key => {
        changeTabKey(key);
    };

    // goDetails
    const goDetails = (item, category) => {
        handleDetailsVisible(true);
        setJson(item.options);
        setId(category.id);
    };

    // submit
    const renderCanvas = () => {
        handleOk(json);
        handleModal(false);
    };

    // 渲染不一样的可视化form
    const renderDiffForm = () => {
        if (id === 'line' || id === 'bar') {
            return (
                <EchartsForm
                    handleDetailsVisible={handleDetailsVisible}
                    setEchartsValue={setEchartsValue}
                    renderCanvas={renderCanvas}
                    json={json}
                    id={id}
                />
            );
        } else if (id === 'pie') {
            return <div>1111</div>;
        }
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
                            {renderDiffForm()}
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
