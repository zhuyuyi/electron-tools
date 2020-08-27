import React, {Component} from 'react';
import {Button, Form, Input, Card} from 'antd';

const FormItem = Form.Item;

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};

const layoutMini = {
    labelCol: {span: 4},
    wrapperCol: {span: 4},
};

class EchartsForm extends Component {
    state = {
        formIns: null, // form实例
    };

    componentDidMount() {
        const formIns = React.createRef();
        this.setState({
            formIns,
        });
    }

    // 结束事件
    onFinish = () => {
        const {
            // setEchartsValue,
            onFinish,
        } = this.props;

        const {formIns} = this.state;

        formIns.current
            .validateFields()
            .then(values => {
                console.log(values);
                onFinish(values);
            })
            .catch(err => {
                console.log(err);
            });
    };

    formRender = () => {
        const {formIns} = this.state;

        return (
            <Card>
                <Form {...layout} name="basic" ref={formIns}>
                    <FormItem
                        {...layoutMini}
                        label="盒子宽度"
                        name="width"
                        rules={[{required: true, message: '请输入宽度'}]}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        {...layoutMini}
                        label="盒子高度"
                        name="height"
                        rules={[{required: true, message: '请输入高度'}]}
                    >
                        <Input />
                    </FormItem>
                </Form>
            </Card>
        );
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.onFinish}>
                    运行
                </Button>
                {this.formRender()}
            </div>
        );
    }
}

export default EchartsForm;
