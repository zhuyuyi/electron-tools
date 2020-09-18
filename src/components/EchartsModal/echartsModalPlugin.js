// 初始化图表库

export function initCharts(handleVisible) {
    if (!window.tinymce) {
        console.log('没有找到tinymce库');
        return false;
    }

    window.tinymce.PluginManager.add('echarts', function (editor) {
        // editor.ui.registry.getAll().icons.bdmap || editor.ui.registry.addIcon('bdmap','<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M670.8,733c21.1-46.1,45.6-73.7,64.5-90.5,10.3-9.2,21.1-16.8,32.5-21.7-6-8.1-10.6-15.3-15.2-22.2-8.4-12.6-17.3-27.1-21.7-34.1-28.7,15.7-55.9,48.2-77.5,77-12.5,16.7-23.8,34.7-34.7,53.7l52,37.9zM450.2,803.5c6,14.6,9.2,29.3,13.5,40.6,1.6,7.1,3.2,13.5,5.4,19.5,19.5-6,39-12,58-20.1,32.5-13.6,71-33,95.4-58.5l-45-48.2c-8.1,8.1-17.9,14.7-30.4,22.8-21.1,13.6-51.5,30.4-97,43.9zM373.8,204.1c0-52,43.4-95.4,95.4-95.4,53.7,0,94.8,43.4,94.8,95.4,0,53.6-41.2,95.4-94.8,95.4-52,0-95.4-41.7-95.4-95.4zm-105.7,0c0,20.1,2.7,39.6,8.7,58.5h-2.2c16.8,39,35.8,79.9,52,111.1l27.1,52c47.5,91.2,105.7,191.3,114.3,204.3,1.1,0,0.547,0,1.1,1.1,32.5-54.7,60.6-104.1,81.8-143.6l34.1-63.4,26.6-52c15.8-30.9,34.7-71,51.5-110.6h-1.6c6-19,8.7-38.5,8.7-58.5,0-110.6-90.5-200.5-201.1-200.5-111.1,0-201.1,90-201.1,200.5zM229.6,800.2c15.2,11.4,31.3,21.3,48.2,30.4,30.2,16,68.8,34.1,112.7,40.7,1.6-13.1,2.5-29.9,4.3-42.3l3.3-21.7c-11.9-2.2-25.6-5.6-40.1-10.8-24.5-8.8-55.8-23.8-90.5-48.2-9.2,13.5-18.6,25.7-26,35.8l-11.9,16.3zM17.2,949.8c0,41.2,33.6,74.2,74.2,74.2H932.5a74,74,0,0,0,74.2-74.2V336.9A74,74,0,0,0,932.5,262.6H728.2L692.4,362.9H894.6c9.2,0,15.7,6,15.7,15.2V511.4c-28.7-0.531-73.2,2.2-116.5,23.3l5.4,14.6,17.3,45c25.5-8.1,47.7-14.2,65-16.8l28.7-4.3V911.9c0,9.2-6.5,15.1-15.7,15.1H133.2c-9.2,0-15.7-5.9-15.7-15.1V704.8a261.1,261.1,0,0,0,15.2,14.1c9.3,8,23.3,21.1,41.2,36.3,10.3-9.2,20-21.2,28.2-29.8,4.8-5,9.2-9.8,13-14.6-42.8-35.8-86.2-86.2-97.5-100.3V378c0-8.7,6.5-15.2,15.7-15.2h53L209.5,262.5H91.4c-40.7,0-74.2,33.1-74.2,74.3V949.7z"/></svg>');

        editor.ui.registry.addButton('echarts', {
            text: 'echats',
            // icon: 'bdmap',
            onAction: function () {
                // editor.insertContent(``)

                handleVisible(true);

                console.log(11111);
            },
        });
    });
}

export function handleOk(json) {
    const activeEditor = window.tinymce.activeEditor;
    let options;
    if (json) {
        options = eval('(' + json + ')');
    }
    const _div = document.createElement('div'); // 空壳div
    let _id = `canvas_${new Date().getTime()}`; // 获取每个id

    let width = '600';
    let height = '400';
    if (options.custom && options.custom.width) {
        width = options.custom.width;
    }
    if (options.custom && options.custom.height) {
        height = options.custom.height;
    }

    const canvasBox = `<div id=${_id} style="width:${width}px;height:${height}px"></div>`;
    let _document = activeEditor.iframeElement.contentDocument;
    const script = `<script>${(function () {
        setTimeout(() => {
            const myChart = window.echarts.init(_document.getElementById(_id), null, {
                renderer: 'canvas',
            });
            myChart.clear();
            myChart.setOption(options);
        }, 500);

        let str = {
            json,
            id: _id,
        };

        return JSON.stringify(str); // 这里需要重写 为了让重渲染时也触发相应
    })()}</script>`;

    _div.innerHTML = canvasBox + script; // 拼装组件

    // display:inline-block;margin:0 auto;
    let render =
        '<div contenteditable="false" style="width:' +
        width +
        'px;height:' +
        height +
        'px" >' +
        _div.innerHTML +
        '</div>'; // 渲染renderdiv

    activeEditor.insertContent(render);
}
