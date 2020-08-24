import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card} from 'antd';
import LayoutHeader from '@/components/LayoutHeader';
import {Editor} from '@tinymce/tinymce-react';
import {plugins, toolbar} from './plugins';

function TinyMceEditor() {
    let options = {
        plugins,
        toolbar,
        statusbar: false,
        language: 'zh_CN',
        min_height: 700,
        max_height: 800,
        codesample_languages: [
            {text: 'HTML/XML', value: 'markup'},
            {text: 'JavaScript', value: 'javascript'},
            {text: 'CSS', value: 'css'},
            {text: 'PHP', value: 'php'},
        ],
        templates: [{title: 'Some title 1', description: 'Some desc 1', content: 'My content'}],
    };

    return (
        <LayoutHeader title="编辑器" subTitle="这是编辑器页">
            <Card>
                <Editor apiKey="5xy2yde9hsmbrclk8m4gt3kox668eirr2wwc81s8zm56eig7" init={options} />
                <Button type="primary">aaaa1aaaa</Button>
            </Card>
        </LayoutHeader>
    );
}

function mapStateToProps(state) {
    return {
        state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TinyMceEditor);
