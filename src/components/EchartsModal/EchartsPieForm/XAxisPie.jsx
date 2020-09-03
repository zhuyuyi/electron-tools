import React, {useState, useEffect, Fragment} from 'react';
import {Input, Tag} from 'antd';
import styles from './index.less';

function XAxisPie(props) {
    const {opitonsData, setOpitonsData, tagType, isShowTag} = props;

    const [editInputVisible, handleEditInputVisible] = useState(-1); // 编辑输入框显示隐藏
    const [editInputValue, setEditInputValue] = useState(''); // 编辑输入框值
    const [editInputRef, setEditInputRef] = useState(null); // 获取refInput

    // 提交编辑input事件
    const handleEditInputConfirm = index => {
        if (editInputValue) {
            let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
            if (isShowTag === '1') {
                _opitonsData[tagType].data[index] = editInputValue;
            }
            if (tagType === 'legend') {
                _opitonsData.series[0].data[index].name = editInputValue;
            }
            setOpitonsData(_opitonsData);
        }
        handleEditInputVisible(false);
    };

    // 编辑input change事件
    const handleEditInputChange = e => {
        setEditInputValue(e.target.value);
    };

    // tag onDoubleClick
    const tagDoubleClick = (index, tag) => {
        handleEditInputVisible(index);
        setEditInputValue(tag);
    };

    // saveEditInputRef
    const saveEditInputRef = input => {
        setEditInputRef(input);
    };

    // 聚焦事件副作用
    useEffect(() => {
        if (editInputRef) {
            editInputRef.focus();
        }
    }, [editInputRef]);

    // closeTag
    const onCloseTag = index => {
        let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
        _opitonsData.series[0].data.splice(index, 1);
        setOpitonsData(_opitonsData);
    };

    return (
        <Fragment>
            {opitonsData.series[0].data &&
                opitonsData.series[0].data.map((tag, index) => {
                    if (editInputVisible !== index) {
                        return (
                            <Tag
                                key={index}
                                closable={tagType !== 'legend'}
                                onClose={() => {
                                    onCloseTag(index);
                                }}
                            >
                                <span
                                    onClick={() => {
                                        tagDoubleClick(index, tag.name);
                                    }}
                                >
                                    {tag.name}
                                </span>
                            </Tag>
                        );
                    } else {
                        return (
                            <Input
                                key={index}
                                ref={saveEditInputRef}
                                value={editInputValue}
                                onChange={handleEditInputChange}
                                onBlur={() => {
                                    handleEditInputConfirm(index);
                                }}
                                onPressEnter={() => {
                                    handleEditInputConfirm(index);
                                }}
                                className={styles.tagInput}
                            />
                        );
                    }
                })}
        </Fragment>
    );
}

export default XAxisPie;
