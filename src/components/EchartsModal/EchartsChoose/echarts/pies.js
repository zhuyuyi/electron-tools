export const pies = [
    {
        title: '基础饼图',
        url: 'https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-simple.jpg?_v_=20200710_1',
        options: `{
            title: {
                text: '基础饼图',
                left: 'center'
            },
            tooltip: {},
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                bottom: 10,
                left: 'center',
                data: ['标签1', '标签2', '标签3', '标签4', '标签5']
            },
            series: [
                {
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value: 1548, name: '标签1'},
                        {value: 535, name: '标签2'},
                        {value: 510, name: '标签3'},
                        {value: 634, name: '标签4'},
                        {value: 735, name: '标签5'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }`,
    },
    {
        title: '自定义饼图',
        url: 'https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-custom.jpg?_v_=20200710_1',
        options: `{
            // backgroundColor: '#2c343c',
            title: {
                text: '自定义饼图',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#2c343c'
                }
            },
            tooltip: {},
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    // name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 274, name: '联盟广告'},
                        {value: 235, name: '视频广告'},
                        {value: 400, name: '搜索引擎'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(0,0,0,0.7)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(0,0,0,0.5)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        }`,
    },
    {
        title: '环状饼图',
        url:
            'https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-doughnut.jpg?_v_=20200710_1',
        options: `{
            tooltip: {},
            legend: {
                bottom: 10,
                left: 'center',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    // name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        }`,
    },
];
