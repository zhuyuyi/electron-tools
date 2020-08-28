import React, {useState} from 'react';
import {Button, Form, Input, Card, Radio} from 'antd';
import XYData from './XYData';
import styles from './index.less';

const FormItem = Form.Item;

function EchartsForm(props) {
    const [form] = Form.useForm();
    const {onFinish, handleDetailsVisible, values, renderCanvas} = props;
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);

    // 结束事件
    const handleSubmit = () => {
        form.current
            .validateFields()
            .then(values => {
                console.log(values);
                onFinish(values);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const formRender = () => {
        return (
            <Card bordered={false} className={styles.formContainer}>
                <Form name="basic" form={form} initialValues={values}>
                    <FormItem
                        label="盒子宽度"
                        name="width"
                        rules={[{required: true, message: '请输入宽度'}]}
                    >
                        <Input style={{width: '30%'}} />
                    </FormItem>
                    <FormItem
                        label="盒子高度"
                        name="height"
                        rules={[{required: true, message: '请输入高度'}]}
                    >
                        <Input style={{width: '30%'}} />
                    </FormItem>
                    <FormItem label="标题" name="title">
                        <Input style={{width: '30%'}} />
                    </FormItem>
                    <FormItem label="是否展示x轴title" name="isShowX">
                        <Radio.Group>
                            <Radio value="1">是</Radio>
                            <Radio value="2">否</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="是否展示y轴title" name="isShowY">
                        <Radio.Group>
                            <Radio value="1">是</Radio>
                            <Radio value="2">否</Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="x轴数据">
                        <XYData tags={tags} setTags={setTags} />
                    </FormItem>
                </Form>
            </Card>
        );
    };

    return (
        <div>
            <div className={styles.btnBox}>
                <Button
                    onClick={() => {
                        handleDetailsVisible(false);
                    }}
                    className={styles.marginRight}
                >
                    返回
                </Button>
                <Button type="primary" onClick={handleSubmit} className={styles.marginRight}>
                    运行
                </Button>
                <Button type="primary" onClick={renderCanvas}>
                    插入图表
                </Button>
            </div>
            {formRender()}
        </div>
    );
}

export default EchartsForm;
