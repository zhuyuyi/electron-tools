// apiKey 5xy2yde9hsmbrclk8m4gt3kox668eirr2wwc81s8zm56eig7
export const plugins =
    'print table advlist lists echarts noneditable anchor bbcode code charmap codesample emoticons fullscreen hr image imagetools insertdatetime legacyoutput link media nonbreaking noneditable pagebreak paste print searchreplace table template wordcount';

export const toolbar =
    'undo redo | formatselect 自定义库 | forecolor backcolor formatting alignment | bullist numlist | anchor image link media charmap emoticons hr nonbreaking codesample | searchreplace pagebreak fullscreen template';

export const codesample_languages = [
    // 高亮语言
    {text: 'HTML/XML', value: 'markup'},
    {text: 'JavaScript', value: 'javascript'},
    {text: 'CSS', value: 'css'},
    {text: 'PHP', value: 'php'},
    {text: 'Python', value: 'python'},
    {text: 'SQL', value: 'sql'},
    {text: 'Java', value: 'java'},
];

// 获取script标签
export const getScript = value => {
    let cavansScript = value.match(/<script[\d\D]*>([\d\D]*)<\/script>/);
    console.log(cavansScript, 'cavansScript');
    let options = JSON.parse(cavansScript[1]);

    const activeEditor = window.tinymce.activeEditor;
    let _document = activeEditor.iframeElement.contentDocument;

    let dom = _document.getElementById(options.id);
    dom.innerHTML = '';
    setTimeout(() => {
        const myChart = window.echarts.init(dom, null, {
            renderer: 'canvas',
        });
        // myChart.clear();
        myChart.setOption(JSON.parse(options.json));
        console.log(myChart, 'myChart');
    }, 1000);
};

export const options = {
    selector: '#textarea',
    init_instance_callback(ed) {
        ed.on('change', () => {
            // console.log(e);
            let value = ed.getContent();
            getScript(value);
        });
    },
    // init_instance_callback() {
    //     const activeEditor = window.tinymce.activeEditor;
    //     let _document = activeEditor.iframeElement.contentDocument;
    //     _document.addEventListener('drag', (event) => {
    //         console.log(event)
    //     }, false);
    // },
    plugins,
    toolbar,
    allowed_fields: true,
    statusbar: false, // 去除赞助
    language: 'zh_CN', // 支持中文
    min_height: 700,
    max_height: 800,
    codesample_languages,
    templates: [{title: 'Some title 1', description: 'Some desc 1', content: 'My content'}], // 模板
    toolbar_groups: {
        // toolbar格式
        formatting: {
            text: '文字格式',
            tooltip: 'Formatting',
            items: 'bold italic underline | superscript subscript',
        },
        alignment: {
            icon: 'align-left',
            tooltip: 'alignment',
            items: 'alignleft aligncenter alignright alignjustify',
        },
        自定义库: {
            text: '自定义库',
            tooltip: '自定义库',
            items: 'echarts',
        },
    },
    skin: 'oxide-dark', // wiki
    image_caption: true, // 是否显示图片标题
    image_advtab: true, // 图片高级属性
    media_strict: false,
    allow_unsafe_link_target: true, // 允许不安全的link
    schema: 'html5',
    valid_elements: '*[*]',
    extended_valid_elements: '*[*]',
    // images_upload_handler: (blobInfo, succFun, failFun) => {
    //     console.log(blobInfo.base64());
    //     let base64 = blobInfo.base64();
    //     // console.log(base64)
    //     succFun(base64);
    // },
    file_picker_types: 'image', // 指定能上传的是啥
    file_picker_callback: callback => {
        // 文件回调 第二三个参数value, meta
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = function () {
            let file = this.files[0];

            let reader = new FileReader();
            reader.onload = function () {
                let id = 'blobid' + new Date().getTime();
                let blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                let base64 = reader.result.split(',')[1];
                let blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                // let base64 = reader.result;
                // console.log(base64)
                callback(blobInfo.blobUri(), {title: file.name});
            };
            reader.readAsDataURL(file);
        };

        input.click();
    },
};

// let aa = `<div>11111111111111111</div><script>(function(){let a = 1;console.log(a)})()</script><div>22</div><script>(function(){let a = 2;console.log(a)})()</script>`; // 测试用例
// // 取出所有的方法
// let b = aa.match(/(\(function\(\){[^<>]*\}\)\(\))/g);

// console.log(b);
// // 先渲染
// let c = `${aa}`;
// // 执行方法
// for (let i = 0; i < b.length; i++) {
//     eval(b[i]);
// }
