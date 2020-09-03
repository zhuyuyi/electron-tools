import React, {useState, useRef, useEffect, Fragment} from 'react';
import {Input, Tag} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import styles from './index.less';

function XAxis(props) {
    const {opitonsData, setOpitonsData, tagType} = props;

    const inputRef = useRef(); // 添加的输入框
    const [inputVisible, handleInputVisible] = useState(false); // 添加输入框显示隐藏
    const [inputValue, setInputValue] = useState(''); // 添加输入框值

    const [editInputVisible, handleEditInputVisible] = useState(-1); // 编辑输入框显示隐藏
    const [editInputValue, setEditInputValue] = useState(''); // 编辑输入框值
    const [editInputRef, setEditInputRef] = useState(null); // 获取refInput
    const [type, setType] = useState(tagType || 'xAxis');

    useEffect(() => {
        if (tagType !== 'legend') {
            if (opitonsData.xAxis.type === 'category') {
                setType('xAxis');
            } else if (opitonsData.yAxis.type === 'category') {
                setType('yAxis');
            }
        }
    }, []);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    // 提交input事件
    const handleInputConfirm = () => {
        if (inputValue) {
            let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
            _opitonsData[type].data = [..._opitonsData[type].data, inputValue];

            setOpitonsData(_opitonsData);
            setInputValue(''); // 将input制空
        }
        handleInputVisible(false); // 隐藏输入框
    };

    // input change事件
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    // 提交编辑input事件
    const handleEditInputConfirm = index => {
        if (editInputValue) {
            let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
            _opitonsData[type].data[index] = editInputValue;
            if (tagType === 'legend') {
                _opitonsData.series[index].name = editInputValue;
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
        _opitonsData[type].data.splice(index, 1);
        setOpitonsData(_opitonsData);
    };

    // 新增的渲染dom
    const renderInputOrTag = () => {
        if (tagType !== 'legend') {
            if (inputVisible) {
                return (
                    <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                        className={styles.tagInput}
                    />
                );
            } else {
                return (
                    <Tag
                        onClick={() => {
                            handleInputVisible(true);
                        }}
                    >
                        <PlusOutlined /> 添加数据
                    </Tag>
                );
            }
        }
    };

    return (
        <Fragment>
            {opitonsData[type] &&
                opitonsData[type].data &&
                opitonsData[type].data.map((tag, index) => {
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
                                        tagDoubleClick(index, tag);
                                    }}
                                >
                                    {tag}
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
            {renderInputOrTag()}
        </Fragment>
    );
}

export default XAxis;
