/*
 * @Author: 朱育仪
 * @Date: 2020-09-02 09:19:10
 * @Last Modified by: 朱育仪
 * @Last Modified time: 2020-09-02 09:19:10
 * @Description: line和bar所用的form
 */

import React, {useState, useEffect} from 'react';
import {Button, Form, Input, Card, Radio} from 'antd';
import XYData from './XYData';
import XAxis from './XAxis';
import SubmitEcharts from '@/components/EchartsModal/SubmitEcharts';
import styles from './index.less';
import {
    isShowAreaStyleFuc,
    timeOutRender,
    changeTitle,
    changeWidth,
    changeHeight,
    handleSubmit,
} from './../publicFunction';

const FormItem = Form.Item;

function EchartsForm(props) {
    const [form] = Form.useForm();
    let timer = null;
    const {handleDetailsVisible, renderCanvas, json, setEchartsValue, id} = props;

    const options = eval('(' + json + ')'); // 配置项
    const [opitonsData, setOpitonsData] = useState(options); // 可视化配置项
    const [values, setValues] = useState({
        width: (options.custom && options.custom.width) || '600', // 宽度
        height: (options.custom && options.custom.height) || '400', // 高度
        title: (options.title && options.title.text) || '', // canvas标题
        isShowTooplip: options.tooltip && options.tooltip.trigger ? '1' : '2', // 是否展示图表文字提示
        isShowAreaStyle: isShowAreaStyleFuc(options), // 是否展示填充色
        isShowTag: options.legend && options.legend.data ? '1' : '2', // 是否展示标签
    }); // 配置项

    // 是否展示图表文字提示
    const changeShowTooplip = e => {
        let value = e.target.value;
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        if (value === '1') {
            _opitonsData.tooltip = {
                trigger: 'axis',
            };
        } else {
            delete _opitonsData.tooltip;
        }
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // 是否展示填充色
    const changeShowAreaStyle = e => {
        let value = e.target.value;
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        if (value === '1') {
            _opitonsData.series.forEach(item => {
                item.areaStyle = {};
            });
        } else {
            _opitonsData.series.forEach(item => {
                if (item.areaStyle) {
                    delete item.areaStyle;
                }
            });
        }
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // 是否展示标签
    const changeShowTag = e => {
        let value = e.target.value;
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        if (value === '1') {
            _opitonsData.legend = {
                data: [],
            };
            for (let i = 0; i < _opitonsData.series.length; i++) {
                let tag = `标签${i + 1}`;
                _opitonsData.series[i].name = tag; // 要与legend中数据一一对应
                _opitonsData.legend.data.push(tag);
            }
        } else {
            _opitonsData.legend = {
                data: [],
            };
            for (let i = 0; i < _opitonsData.series.length; i++) {
                _opitonsData.series[i].name = '';
            }
        }
        setValues({
            ...values,
            isShowTag: value,
        });
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // 添加数据源
    const addData = () => {
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        let index = _opitonsData.series.length + 1;
        _opitonsData.series = [..._opitonsData.series, {data: [], type: id, name: `标签${index}`}];
        if (values.isShowTag === '1') {
            _opitonsData.legend.data.push(`标签${index}`);
        }
        timer = timeOutRender(timer, () => {
            setOpitonsData(_opitonsData);
        });
    };

    // opitonsData 更新后执行
    useEffect(() => {
        setEchartsValue(JSON.stringify(opitonsData));
    }, [opitonsData]);

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
                    <FormItem
                        label="是否展示填充色"
                        name="isShowAreaStyle"
                        onChange={changeShowAreaStyle}
                    >
                        <Radio.Group>
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
                    {values.isShowTag === '1' && (
                        <FormItem label={`标签值`}>
                            <XAxis
                                opitonsData={opitonsData}
                                setOpitonsData={setOpitonsData}
                                tagType={`legend`}
                            />
                        </FormItem>
                    )}
                    <FormItem label="数据轴标题">
                        <XAxis opitonsData={opitonsData} setOpitonsData={setOpitonsData} />
                    </FormItem>
                    {opitonsData.series.map((item, index) => {
                        let random = (Math.random() * 100000000).toFixed(0);
                        return (
                            <FormItem
                                label={`数据呈现（第${index + 1}组数据）`}
                                key={`${random}_${index}`}
                            >
                                <XYData
                                    opitonsData={opitonsData}
                                    setOpitonsData={setOpitonsData}
                                    opitonsDataItemIndex={index}
                                />
                            </FormItem>
                        );
                    })}
                    <FormItem label="添加新数据">
                        <Button type="primary" onClick={addData}>
                            添加
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        );
    };

    return (
        <div>
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

export default EchartsForm;
