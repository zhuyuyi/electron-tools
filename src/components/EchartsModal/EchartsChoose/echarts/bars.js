export const bars = [
    {
        title: '柱状图基础',
        url:
            'https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-background.jpg?_v_=20200710_1',
        options: `{
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }`,
    },
    {
        title: '经典柱状图',
        url:
            'https://echarts-www.cdn.bcebos.com/examples/data/thumb/dataset-simple1.jpg?_v_=20200710_1',
        options: `{
            legend: {},
            tooltip: {},
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告']
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'直接访问',
                    data: [110, 200, 50, 80, 70, 10, 130],
                    type: 'bar'
                },
                {
                    name:'邮件营销',
                    data: [120, 100, 150, 80, 70, 100, 120],
                    type: 'bar'
                },
                {
                    name:'联盟广告',
                    data: [100, 200, 60, 80, 70, 110, 110],
                    type: 'bar'
                }
            ]
        }`,
    },
    {
        title: '堆叠条形图',
        url:
            'https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-y-category-stack.jpg?_v_=20200710_1',
        options: `{
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        }`,
    },
];
