import React, {useEffect, useState} from 'react';

import LayoutHeader from '@/components/LayoutHeader';
import styles from './index.less';
import {options} from './ckEditorOptions';
import EchartsModal from '@/components/EchartsModal';

function CkEditor() {
    const [editor, setEditor] = useState({}); // 编辑器
    const [visible, handleVisible] = useState(false); // 弹框显示隐藏

    useEffect(() => {
        initEditor();
        // handleModal(true)
        console.log(editor);
    }, []);

    const initEditor = () => {
        window.ClassicEditor.create(document.querySelector('#ckEditor'), options)
            .then(editor => {
                editor.model.change(writer => {
                    console.log(editor.model.document.selection, 'editor.model.document.selection');
                    // editor.model.insertContent(imageElement, editor.model.document.selection);
                    const imageElement = writer.createElement('div');
                    editor.model.insertContent(imageElement, editor.model.document.selection);
                });
                setEditor(editor);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // eChartsModal
    const handleModal = isShow => {
        handleVisible(isShow);
    };

    return (
        <LayoutHeader title="编辑器" subTitle="这是ckEditor编辑器页">
            <div className={styles.ckEditor}>
                <div id="ckEditor"></div>
            </div>

            {visible && <EchartsModal visible={visible} handleModal={handleModal} />}
        </LayoutHeader>
    );
}

export default CkEditor;
