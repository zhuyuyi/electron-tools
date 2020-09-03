let timer = null; // 定时器

// 校验是否全部填充
export function isShowAreaStyleFuc(options) {
    let isShowAreaStyle = '1';
    for (let i = 0; i < options.series.length; i++) {
        let item = options.series[i];
        if (!item.areaStyle) {
            isShowAreaStyle = '2';
            break;
        }
    }
    return isShowAreaStyle;
}

// 延迟执行渲染
export function timeOutRender(timer = null, callback, time = 500) {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(() => {
        callback();
        clearTimeout(timer);
        timer = null;
    }, time);
    return timer;
}

// 改变标题
export const changeTitle = (e, opitonsData, setOpitonsData, id) => {
    let value = e.target.value;
    let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
    _opitonsData.title = {
        text: value,
    };
    if (id === 'pie') {
        _opitonsData.title.left = 'center';
    }
    timer = timeOutRender(timer, () => {
        setOpitonsData(_opitonsData);
    });
};

// 改变宽度
export const changeWidth = (e, opitonsData, setOpitonsData) => {
    let value = e.target.value;
    let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
    if (_opitonsData.custom) {
        _opitonsData.custom.width = value;
    } else {
        _opitonsData.custom = {
            width: value,
        };
    }
    timer = timeOutRender(timer, () => {
        setOpitonsData(_opitonsData);
    });
};

// 改变高度
export const changeHeight = (e, opitonsData, setOpitonsData) => {
    let value = e.target.value;
    let _opitonsData = JSON.parse(JSON.stringify(opitonsData));
    if (_opitonsData.custom) {
        _opitonsData.custom.height = value;
    } else {
        _opitonsData.custom = {
            height: value,
        };
    }
    timer = timeOutRender(timer, () => {
        setOpitonsData(_opitonsData);
    });
};

// 结束事件
export const handleSubmit = (form, setValues) => {
    form.validateFields()
        .then(values => {
            console.log(values);
            setValues(values);
        })
        .catch(err => {
            console.log(err);
        });
};
