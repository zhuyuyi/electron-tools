import {lines} from './lines';
import {bars} from './bars';
import {pies} from './pies';

export const echartsData = [
    {
        title: '折线图',
        id: 'line',
        echarts: lines,
    },
    {
        title: '柱状图',
        id: 'bar',
        echarts: bars,
    },
    {
        title: '饼图',
        id: 'pie',
        echarts: pies,
    },
    {
        title: '散点图',
        echarts: lines,
    },
    {
        title: '树图',
        echarts: lines,
    },
    {
        title: '雷达图',
        echarts: lines,
    },
    {
        title: '关系图',
        echarts: lines,
    },
];
