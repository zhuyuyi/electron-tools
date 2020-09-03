import React, {useState, useEffect} from 'react';
import {Form, Input, Radio, Card} from 'antd';
import SubmitEcharts from '@/components/EchartsModal/SubmitEcharts';
import styles from './index.less';
import XAxisPie from './XAxisPie';
import XYData from './XYData';
import {
    timeOutRender,
    changeTitle,
    changeWidth,
    changeHeight,
    handleSubmit,
} from './../publicFunction';

const FormItem = Form.Item;

function EchartsPieForm(props) {
    const [form] = Form.useForm();
    const {handleDetailsVisible, renderCanvas, json, setEchartsValue, id} = props;
    let timer = null;
    // 配置项
    let tagOptions = {
        data: [],
        bottom: 10,
        left: 'center',
    };
    const options = eval('(' + json + ')'); // 配置项
    const [opitonsData, setOpitonsData] = useState(options); // 可视化配置项
    const [values, setValues] = useState({
        width: (options.custom && options.custom.width) || '600', // 宽度
        height: (options.custom && options.custom.height) || '400', // 高度
        title: (options.title && options.title.text) || '', // canvas标题
        subTitle: (options.title && options.title.subtext) || '', // canvas 副标题
        isShowTooplip: options.tooltip ? '1' : '2', // 是否展示图表文字提示
        isShowTag: options.legend && options.legend.data ? '1' : '2', // 是否展示标签
    }); // 配置项

    // 是否展示图表文字提示
    const changeShowTooplip = e => {
        let value = e.target.value;
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        if (value === '1') {
            _opitonsData.tooltip = {};
        } else {
            delete _opitonsData.tooltip;
        }
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // 是否展示标签
    const changeShowTag = e => {
        let value = e.target.value;
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        let data = _opitonsData.series[0].data;
        if (value === '1') {
            _opitonsData.legend = {
                ...tagOptions,
            };
            for (let i = 0; i < data.length; i++) {
                let tag = `标签${i + 1}`;
                let name = data[i].name;
                if (data[i].name) {
                    _opitonsData.legend.data.push(name);
                } else {
                    data[i].name = tag; // 要与legend中数据一一对应
                    _opitonsData.legend.data.push(data[i].name);
                }
            }
        } else {
            _opitonsData.legend = {
                ...tagOptions,
            };
        }
        setValues({
            ...values,
            isShowTag: value,
        });
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // opitonsData 更新后执行
    useEffect(() => {
        setEchartsValue(JSON.stringify(opitonsData));
    }, [opitonsData]);

    // form render
    const formRender = () => {
        return (
            <Card bordered={false} className={styles.formContainer}>
                <Form name="basic" form={form} initialValues={values}>
                    <FormItem
                        label="盒子宽度"
                        name="width"
                        rules={[{required: true, message: '请输入宽度'}]}
                    >
                        <Input
                            style={{width: '30%'}}
                            onChange={e => {
                                changeWidth(e, opitonsData, setOpitonsData);
                            }}
                        />
                    </FormItem>
                    <FormItem
                        label="盒子高度"
                        name="height"
                        rules={[{required: true, message: '请输入高度'}]}
                    >
                        <Input
                            style={{width: '30%'}}
                            onChange={e => {
                                changeHeight(e, opitonsData, setOpitonsData);
                            }}
                        />
                    </FormItem>
                    <FormItem label="标题" name="title">
                        <Input
                            style={{width: '30%'}}
                            onChange={e => {
                                changeTitle(e, opitonsData, setOpitonsData, id);
                            }}
                            maxLength={10}
                        />
                    </FormItem>
                    <FormItem label="是否展示图表文字提示" name="isShowTooplip">
                        <Radio.Group onChange={changeShowTooplip}>
                            <Radio value="1">是</Radio>
                            <Radio value="2">否</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="是否展示标签" name="isShowTag" onChange={changeShowTag}>
                        <Radio.Group>
                            <Radio value="1">是</Radio>
                            <Radio value="2">否</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label={`标签值`}>
                        <XAxisPie
                            opitonsData={opitonsData}
                            setOpitonsData={setOpitonsData}
                            tagType={`legend`}
                            isShowTag={values.isShowTag}
                        />
                    </FormItem>
                    <FormItem label={`数据轴数据`}>
                        <XYData
                            opitonsData={opitonsData}
                            setOpitonsData={setOpitonsData}
                            isShowTag={values.isShowTag}
                        />
                    </FormItem>
                </Form>
            </Card>
        );
    };

    return (
        <div className={styles.aceEditorBox}>
            <SubmitEcharts
                handleDetailsVisible={handleDetailsVisible}
                renderCanvas={renderCanvas}
                handleSubmit={handleSubmit}
                form={form}
                setValues={setValues}
            />
            {formRender()}
        </div>
    );
}

export default EchartsPieForm;
